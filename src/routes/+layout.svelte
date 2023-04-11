<script lang="ts">
	import '$style/main.scss';

	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<slot />

<SvelteToast />

<style>
	:root {
		--navbar-height: 72px;
	}
</style>
