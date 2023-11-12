<template>
    <div class="day">
        <div class="weekday">
            {{day.day_of_week}}
        </div>
        <div><img :src="`https://www.weatherbit.io/static/img/icons/${day.weather_icon}.png`"/></div>
        <div class="temperature">
            <span>max: {{day.max_temp}}&deg;C low: {{day.min_temp}}&deg;C</span>
        </div>
    </div>
</template>



<script>
export default {
    name: 'DayItem',
    props: ['day'],
}
</script>




<style scoped>
    .day {
        display: flex;
        flex-direction: column;
        padding: 30px;
    }
</style>