import { toast } from '@zerodevx/svelte-toast';

function success(message: string | undefined): void {
	toast.push(message || 'Success', {
		theme: {
			'--toastBackground': 'var(--color-positive-50)',
			'--toastColor': 'var(--color-positive-200)',
			'--toastBarBackground': 'var(--color-positive-200)',
			'--toastBorder': '1px solid var(--color-positive-200))',
			'--toastPadding': '0.25rem 1rem'
		}
	});
}

function error(message: string | undefined): void {
	toast.push(message || 'Error please try again', {
		theme: {
			'--toastBackground': 'var(--color-negative-50)',
			'--toastColor': 'var(--color-negative-200)',
			'--toastBarBackground': 'var(--color-negative-200)',
			'--toastBorder': '1px solid var(--color-negative-200))',
			'--toastPadding': '0.25rem 1rem'
		}
	});
}

export default {
	success,
	error
};
