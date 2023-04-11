import { redirect } from '@sveltejs/kit'

import { invalidate, invalidateAll } from '$app/navigation'
import toast from '$lib/toast'
import type { Api } from '$types'

const proxyEndpoint = '/api'

async function invoke<T>(
	fn: string,
	args: Record<string, unknown> | FormData,
	fetch: typeof window.fetch,
	opt?: {
		method?: 'GET' | 'POST'
		noRedirect?: boolean
	},
): Promise<T> {
	const body = await (opt?.method === 'GET' ? _get(fn, fetch) : _post(fn, args ?? {}, fetch))

	if (!body.ok) {
		const msg = body.error?.message || body.message || ''
		const code = body.error?.code || ''

		console.error(`[api] ok=false, fn=${fn}, err_msg=${msg || '{}'}, err_code=${code || ''}`)

		switch (true) {
			case msg === 'unauthorized':
				body.error.unauth = true

				if (!opt?.noRedirect) {
					throw redirect(302, '/')
				}
				break
			case msg === 'validate error':
				body.error.validate = body.error.items
				break
			case msg === 'not found':
				body.error.notFound = true
				break
			case msg === 'Internal Error':
				body.error.internal = true
				break
			default:
				break
		}
	}
	return body
}

async function _post(
	fn: string,
	args: Record<string, unknown> | FormData,
	fetch: typeof window.fetch,
) {
	const isFormData = args instanceof FormData

	const response = await fetch(`${proxyEndpoint}/${fn}`, {
		method: 'POST',
		...(isFormData
			? { body: args }
			: {
					body: JSON.stringify(args),
					headers: { 'Content-Type': 'application/json' },
			  }),
	})

	return response.json()
}

async function _get(fn: string, fetch: typeof window.fetch) {
	const response = await fetch(`${proxyEndpoint}/${fn}`, {
		method: 'GET',
	})

	return response.json()
}

function handleApiError(error: Api.Error | undefined) {
	if (error?.internalError) {
		return toast.error('Internal Error')
	} else if (error?.notFound) {
		return toast.error('Not found')
	} else if (error?.unauth) {
		return toast.error('Unauthorized')
	} else if (error?.message) {
		return toast.error(error?.message)
	} else {
		return toast.error('Unknown Error')
	}
}

export default {
	invoke,
	invalidate: async (fn: string) => {
		if (!fn) {
			return invalidateAll()
		}
		const t = Date.now()
		const p = await invalidate(`${proxyEndpoint}/${fn}`)
		const d = Date.now() - t
		console.log(`[api] invalidate ${fn} took ${d}ms`)

		if (d < 10) {
			console.log(`[api] re-invalidate ${fn}`)
			return invalidate(`${proxyEndpoint}/${fn}`)
		}
		return p
	},
	handleApiError,
}
