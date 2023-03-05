<script>
	const aaa = 5;

	import Navbar from '$components/Navbar.svelte';
	import swal from '$lib/swal';
</script>

<Navbar />

<section class="lo-container _pdt-10">
	<div class="_fs-8 _cl-primary _tal-ct">Welcome to the SvelteKit + Nomimono</div>

	<div class="_mgt-10">
		<button
			class="nm-button"
			on:click={() =>
				swal.confirm({
					title: 'Confirm'
				})}
		>
			Swal Confirm
		</button>
	</div>
</section>

<style>
	.aaa {
		color: red;
		font-weight: 500;
		font-size: 50px;
	}
</style>
