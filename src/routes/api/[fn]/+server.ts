import { env } from '$env/dynamic/private'

import type { RequestEvent } from './$types'

export async function POST({ locals, params, request, fetch }: RequestEvent) {
	const token = locals.token

	console.log(`${env.API_ENDPOINT}/${params.fn}`)
	const resp = await fetch(`${env.API_ENDPOINT}/${params.fn}`, {
		method: 'POST',
		body: request.body,
		duplex: 'half',
		headers: {
			accept: 'application/json',
			'content-type': request.headers.get('content-type') || '',
			...(token ? { authorization: `bearer ${token}` } : {}),
		},
	} as RequestInit & { duplex: 'half' })

	console.log(resp)

	return new Response(resp.body, {
		status: resp.status,
		headers: {
			'content-type': resp.headers.get('content-type') || '',
		},
	})
}

export async function GET({ locals, params, request, fetch }: RequestEvent) {
	const token = locals.token

	const resp = await fetch(`${env.API_ENDPOINT}/${params.fn}`, {
		method: 'GET',
		duplex: 'half',
		headers: {
			accept: 'application/json',
			'content-type': request.headers.get('content-type') || '',
			...(token ? { authorization: `bearer ${token}` } : {}),
		},
	} as RequestInit & { duplex: 'half' })

	return new Response(resp.body, {
		status: resp.status,
		headers: {
			'content-type': resp.headers.get('content-type') || '',
		},
	})
}
