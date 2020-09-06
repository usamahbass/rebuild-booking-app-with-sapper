<script>
	import Navbar from '../components/shared/Navbar.svelte';

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Navbar/>

<main>
	<slot></slot>
</main>