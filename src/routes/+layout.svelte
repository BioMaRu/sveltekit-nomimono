<script lang="ts">
	import '$style/main.scss'
	import '@fontsource/inter/400.css'
	import '@fontsource/inter/500.css'
	import '@fontsource/inter/600.css'

	import { SvelteToast } from '@zerodevx/svelte-toast'

	import { beforeNavigate } from '$app/navigation'
	import { updated } from '$app/stores'

	beforeNavigate(({ willUnload, to }) => {
		if ($updated && !willUnload && to?.url) {
			location.href = to.url.href
		}
	})
</script>

<slot />

<SvelteToast />

<style>
	:root {
		--navbar-height: 72px;
	}
</style>
