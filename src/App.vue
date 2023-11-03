<template>
	<div id="app">
		<header class="header">
			<img class="logo" src="./assets/logo.png" alt="" />
			<h1>Weather Forecast</h1>
		</header>
		<main>
		<WeatherPanel/>
		</main>
	</div>
</template>

<script>
	import WeatherPanel from './components/WeatherPanel.vue'
	export default {
		name: 'App',
		components: {
			WeatherPanel
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		font-family: 'Montserrat', sans-serif;
		color: rgb(198, 219, 241);
		text-align: center;
		height: 100vh;
		background-color: lightblue;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0.75)
		);
	}

	.header {
		padding: 5%;
	}
	.logo {
		width: 4em;
		background-repeat: no-repeat;
	}
	h1 {
		font-family: 'Paytone One', sans-serif;
		font-size: 2rem;
		letter-spacing: .15rem;
		color: rgb(247, 243, 243);
	}

	@media only screen and (orientation: landscape) {
		#app {
			min-height: fit-content;
		}
	}
</style>
