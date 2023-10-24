<template>
	<div id="app">
		<header class="header">
			<img class="logo" src="./assets/logo.png" alt="" />
			<h1>Weather Forecast</h1>

		</header>
		<main>
			<input id="search-bar" type="text">
		</main>
	</div>
</template>

<script></script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		display: flex;
		flex-direction: column;
		color: #2c3e50;
		text-align: center;
		min-height: 100vh;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.15),
			rgba(0, 0, 0, 0.75)
		);
	}

	.header {
		padding: 2rem;
	}
	.logo {
		width: 6em;
	}
	h1 {
		font-family: 'Paytone One', sans-serif;
		font-size: 2.5rem;
		letter-spacing: .1rem;
		color: rgb(247, 243, 243);
	}
	input {
		width: 60%;
		height: 2em;
		border-radius: .5em;
		border: none;
		padding: .5em;
		margin-top: 2em;
		box-shadow: 0 0 .5em rgb(247, 243, 243);
	}
</style>
