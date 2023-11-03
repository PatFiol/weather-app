<template>
  <div class="search-box">
    <input
    type="text"
    class="search-bar"
    placeholder="Search..."/>
  </div>
  <main class="container">
    <div class="top-wrapper">
      <div class="location">Location</div>
      <div class="date">Date</div>
    </div>
    <div class="temp">20 <span>° C</span></div>
    <div class="weather">Weather</div>
  </main>
</template>

<script>
export default {
  data() {

  },
  methods: {

  }
}
</script>

<style scoped>
input {
  width: 60%;
  max-width: 300px;
  height: 3em;
  border-radius: .5em;
  border: none;
  outline: 0;
  padding: .5em;
  box-shadow: 0 0 .5em rgb(105, 104, 104);
}
input:focus {
  box-shadow: 0 0 .5em rgb(247, 243, 243);
}
.search-box {
  display: flex;
  justify-content: center;
  gap: .5em;
}
li {
  list-style: none;
  padding: 6%;
}
.container {
  display: grid;
  gap: 2rem;

  margin:10% auto;
  padding: 2rem;
  width: 50vh;
  max-width: 80vw;
  text-align: center;
  color: whitesmoke;

	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0));
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: 10px;
	border: 2px solid rgba(255, 255, 255, 0.5);
	border-left: 2px solid rgba(255, 255, 255, 0.2);
	border-top: 2px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
.top-wrapper .location {
  font-size: 2rem;
}
.top-wrapper .date {
  font-size: smaller;
}
.temp {
  font-size: 4rem;
  font-weight: bolder;
  text-shadow: 1px 1px 2px;
  font-family: 'Paytone One', sans-serif;
}
.temp span {
  font-size: smaller;
}
.weather {
  font-size: 1.5rem;
}

@media only screen and (orientation: landscape) {
  .container {
    margin: 5% auto;
  }
}
</style>