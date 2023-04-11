import 'sweetalert2/dist/sweetalert2.min.css'

import Swal from 'sweetalert2'

interface SwalOptions {
	title: string
	text?: string
	html?: string
	confirmLabel?: string
	cancelLabel?: string
	callback?: () => void
}

export default {
	async confirm({ title, text, html, confirmLabel, cancelLabel, callback }: SwalOptions) {
		const result = await Swal.fire({
			title: title || 'Are you sure ?',
			text: text || '',
			html,
			iconHtml: `
				<dotlottie-player
					autoplay
					speed="1.2"
					mode="normal"
					src="/lottie/warning.lottie"
					style="height: 200px; width: 200px;"
				/>`,
			showCancelButton: true,
			buttonsStyling: false,
			focusCancel: true,
			allowEnterKey: false,
			confirmButtonText: confirmLabel || 'Confirm',
			cancelButtonText: cancelLabel || 'Close',
			reverseButtons: true,
			customClass: {
				confirmButton: 'nm-button _bdrd-max',
				cancelButton: 'nm-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-8',
			},
		})

		if (!result.value) {
			return result
		}

		callback?.()

		return result
	},

	async success({ title, text, html, confirmLabel, callback }: SwalOptions) {
		const result = await Swal.fire({
			title: title || 'Success',
			text: text || '',
			html,
			iconHtml: `<dotlottie-player
					autoplay
					speed="1.2"
					mode="normal"
					src="/lottie/success.lottie"
					style="height: 200px; width: 200px;"
				/>`,
			showCancelButton: false,
			buttonsStyling: false,
			focusCancel: true,
			allowEnterKey: false,
			confirmButtonText: confirmLabel || 'Close',
			reverseButtons: true,
			customClass: {
				confirmButton: 'nm-button _bdrd-max',
				cancelButton: 'nm-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-8',
			},
		})

		if (!result.value) {
			return
		}

		callback?.()

		return result
	},
	async error({ title, text, html, confirmLabel, callback }: SwalOptions) {
		const result = await Swal.fire({
			title: title || 'Error',
			text: text || '',
			html,
			iconHtml: `<dotlottie-player
					autoplay
					speed="1.2"
					mode="normal"
					src="/dotLottie/error.lottie"
					style="height: 200px; width: 200px;"
				/>`,
			showCancelButton: false,
			buttonsStyling: false,
			focusCancel: true,
			allowEnterKey: false,
			confirmButtonText: confirmLabel || 'Close',
			reverseButtons: true,
			customClass: {
				confirmButton: 'nm-button _bdrd-max',
				cancelButton: 'nm-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-32px',
			},
		})

		if (!result.value) {
			return
		}

		callback?.()

		return result
	},
}
