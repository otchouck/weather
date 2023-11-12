<template>
    <div>
        <h1>Weather.JS</h1>
        <h2>
            <span class="city">{{ city }}</span>
        </h2>
        <h3> Prevision des 7 prochains jours: </h3>
        <div class="days">
            <Day v-for="day in forecast"
                 v-bind:day="day"
                 v-bind:key="day.day_of_week" />
        </div>
    </div>    
</template>

<script>
import Day from "./Day.vue";
import * as api from "../api";

export default {
    name: 'ForecastIndex',

    components: {
        Day
    },

    data: () => ({
        city: '',
        state: '',
        forecast: []
    }),

    async created() {
        const {city, forecast} = await api.getForecast()
        this.city = city
        this.forecast = forecast
    }
}
</script>
