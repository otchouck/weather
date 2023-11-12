<template>
  <div id="app">
    <Forecast/>
  </div>
</template>

<script>
import Forecast  from './components/Forecast.vue'

export default {
  name: 'app',
  components: {
    Forecast
  }
  /*computed:{
    forcast(){
      return this.$store.state.forecast;
    },
    city() {
      return this.$store.state.city;
    },
  },
  mounted(){
    this.$store.dispatch("getCityLocation");
    this.$store.dispatch("getForecast");
  },*/
};
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  

</style>
