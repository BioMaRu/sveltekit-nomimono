import { toast } from '@zerodevx/svelte-toast'

function success(message: string | undefined): void {
	toast.push(message || 'Success', {
		theme: {
			'--toastBackground': 'hsl(173,33%,95%)', // NOTE: hard code color
			'--toastColor': 'hsl(var(--hsl-positive))',
			'--toastBarBackground': 'hsl(var(--hsl-positive))',
			'--toastBorder': '1px solid hsl(var(--hsl-positive) / 0.25)',
			'--toastPadding': '0.25rem 1rem',
		},
	})
}

function error(message: string | undefined): void {
	toast.push(message || 'Error please try again', {
		theme: {
			'--toastBackground': 'hsl(0,31%,95%)', // NOTE: hard code color
			'--toastColor': 'hsl(var(--hsl-negative))',
			'--toastBarBackground': 'hsl(var(--hsl-negative))',
			'--toastBorder': '1px solid hsl(var(--hsl-negative) / 0.25)',
			'--toastPadding': '0.25rem 1rem',
		},
	})
}

export default {
	success,
	error,
}
