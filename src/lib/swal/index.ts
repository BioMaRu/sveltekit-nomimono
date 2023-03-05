import 'sweetalert2/dist/sweetalert2.min.css';

import Swal from 'sweetalert2';

interface SwalOptions {
	title?: string;
	text?: string;
	html?: string;
	yesLabel?: string;
	callback?: () => void;
}

export default {
	async confirm({ title, text, html, yesLabel, callback }: SwalOptions) {
		const result = await Swal.fire({
			title: title || 'Are you sure ?',
			text: text || '',
			html,
			iconHtml: `
                <dotlottie-player
                    autoplay
                    speed="1.2"
                    mode="normal"
                    src="/dotLottie/warning.lottie"
                    style="height: 200px; width: 200px;"
                />`,
			showCancelButton: true,
			buttonsStyling: false,
			focusCancel: true,
			allowEnterKey: false,
			confirmButtonText: yesLabel || 'ตกลง',
			reverseButtons: true,
			customClass: {
				confirmButton: 'trb-button _bdrd-max',
				cancelButton: 'trb-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-32px'
			}
		});

		if (!result.value) {
			return result;
		}

		callback?.();

		return result;
	},

	async success({ title, text, html, yesLabel, callback }: SwalOptions) {
		const result = await Swal.fire({
			title: title || 'Success',
			text: text || '',
			html,
			iconHtml: `<dotlottie-player
                    autoplay
                    speed="1.2"
                    mode="normal"
                    src="/dotLottie/success.lottie"
                    style="height: 200px; width: 200px;"
                />`,
			showCancelButton: false,
			buttonsStyling: false,
			focusCancel: true,
			allowEnterKey: false,
			confirmButtonText: yesLabel || 'ปิดหน้าต่าง',
			reverseButtons: true,
			customClass: {
				confirmButton: 'trb-button _bdrd-max',
				cancelButton: 'trb-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-32px'
			}
		});

		if (!result.value) {
			return;
		}

		callback?.();

		return result;
	},
	async error({ title, text, html, yesLabel, callback }: SwalOptions) {
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
			confirmButtonText: yesLabel || 'ปิดหน้าต่าง',
			reverseButtons: true,
			customClass: {
				confirmButton: 'trb-button _bdrd-max',
				cancelButton: 'trb-button is-variant-tertiary _bdrd-max',
				actions: '_mgt-32px'
			}
		});

		if (!result.value) {
			return;
		}

		callback?.();

		return result;
	}
};
