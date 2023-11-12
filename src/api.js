import * as geo from './getCurrentPosition'
import {weatherApiKey} from './weatherApikey'

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export async function getForecast() {
    const position = await geo.getCurrentPosition();
    const response = await fetch (`https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherApiKey}&lang=fr&lat=${position.coords.latitude}
                                    &lon=${position.coords.longitude}&days=7`);
    const data = await response.json();

    console.log(data);

    const city = data.city_name;

    const forecast = data.data.map(day => ({
        day_of_week: weekDays[new Date(day.valid_date).getDay()],
        weather_icon: day.weather.icon,
        max_temp: Math.round(day.max_temp),
        min_temp: Math.round(day.min_temp),
        //description: day.description,
    }));

    return {
        city: city,
        forecast: forecast
    }
}