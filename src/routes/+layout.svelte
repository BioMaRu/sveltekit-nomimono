<script lang="ts">
	import '$style/main.scss';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<slot />

<style>
	:root {
		--app-navbar-height: 72px;
	}
</style>
