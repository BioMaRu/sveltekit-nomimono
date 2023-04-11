import dayjs from 'dayjs'

import { env } from '$env/dynamic/public'

export function parseBoolString(v: string): boolean | null {
	if (v === 'true') {
		return true
	} else if (v === 'false') {
		return false
	}

	return null
}

export function date(v: string): string {
	if (!v) {
		return ''
	}

	return dayjs(v).format('DD/MM/YYYY')
}

export function dateTime(v: string): string {
	if (!v) {
		return ''
	}

	return dayjs(v).format('DD/MM/YYYY HH:mm:ss')
}

export function currency(v: number): string {
	if (!v) {
		return ''
	}
	return Number(v).toLocaleString(env.PUBLIC_LOCALE, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})
}
