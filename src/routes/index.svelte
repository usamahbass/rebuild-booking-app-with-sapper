<script>
	import Hero from "../components/home/Hero.svelte"
	import MostPicked from "../components/home/MostPicked.svelte"
</script>

<svelte:head>
	<title>	Booking App	</title>
</svelte:head>

<main class="clear-fix">
	<div class="container">
		<Hero />
	
		<MostPicked/>
	</div>
</main>