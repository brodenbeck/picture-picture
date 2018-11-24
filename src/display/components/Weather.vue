<template>
  <div class="weather">
    <p>Today's forecast calls for {{ this.weatherObj.main.toLowerCase() }}.</p>
    <p>Currently: {{ this.temperature }}</p>
    <p>High: {{ this.highTemperature }}</p>
    <p>Low: {{ this.lowTemperature }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Weather',
  data() {
    return {
      today: new Date(),
      apiBase: 'https://api.openweathermap.org/data/2.5/weather',
      cityId: '4990729', // Detroit, Michigan
      temperature: '',
      highTemperature: '',
      lowTemperature: '',
      weatherObj: {},
    };
  },
  methods: {
    callAPI() {
      axios.get(`${this.apiBase}?APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&id=${this.cityId}`)
        .then(response => {
          this.weatherObj = response.data.weather[0];
          this.temperature = Math.round(
            this.convertKelvinToFahrenheit(response.data.main.temp)
          );
          this.highTemperature = Math.round(
            this.convertKelvinToFahrenheit(response.data.main.temp_max)
          );
          this.lowTemperature = Math.round(
            this.convertKelvinToFahrenheit(response.data.main.temp_min)
          );
        })
        .catch(error => console.log(error));
    },
    convertKelvinToFahrenheit(kelvinTemperature) {
      return (kelvinTemperature - 273.15) * 9/5 + 32;
    },
  },
  created() {
    const today = new Date();
    if(today !== this.today) this.callAPI();
  },
};
</script>
