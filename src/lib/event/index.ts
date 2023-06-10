import { browser } from '$app/environment'

function emit<T>(eventName: string, detail?: T): void {
	if (browser) {
		return
	}

	window.dispatchEvent(new CustomEvent(eventName, { detail } ?? {}))
}

export default {
	emit,
}
