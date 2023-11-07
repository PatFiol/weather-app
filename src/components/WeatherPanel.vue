<template>
  <div class="search-box">
    <input
    @keyup.enter="getWeather()"
    v-model="location"
    type="text"
    class="search-bar"
    placeholder="Search..."/>
  </div>
  <main class="container">
    <div class="top-wrapper">
      <div class="location">{{ location }} {{ countryCode }}</div>
      <div class="date">{{ new Date().toLocaleString() }}</div>
    </div>
    <div class="medium-wrapper">
      <div class="temp">{{ Math.round(temp) }}<span> ° C</span></div>
    <div class="feelsLike">{{ feelsLike }}</div>
    </div>
    <div class="lower-wrapper">
      <div class="weather">{{ description }}</div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weather: {},
      location: '',
      countryCode: '',
      temp: '',
      feelsLike: '',
      description: '',
    }
  },
  methods: {
    getWeather() {
      axios.get (
        'https://api.openweathermap.org/data/2.5/weather?q=' + this.location + ',' + this.countryCode + '&units=metric&appid={api_key}').then(
        response => {
          this.location = response.data.name
          this.countryCode = response.data.sys.country
          this.temp = response.data.main.temp
          this.feelsLike = response.data.main.feels_like
          this.description = response.data.weather[0].description
        }
        ).catch(error => (error))

      }
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
.location {
  font-size: 2rem;
}
.date {
  font-size: smaller;
}
.temp {
  font-size: 4rem;
  font-weight: bolder;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.301);
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