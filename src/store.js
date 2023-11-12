import Vue from "vue";
import Vuex from "vuex";
import {getCoordinates} from "@/getCoordinates";
import { weatherApiKey } from "@/weatherApikey";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        forecast: undefined,
        city: undefined
    },
    mutations: {
        SET_FORECAST(state, data) {
            state.forecast = {...data};
        },
        SET_CITY(state, city_name) {
            state.city = {...city_name};
        }
    },
    actions: {
        async getForecast({commit}) {
            const geolocalisation = await getCoordinates();
            console.log(geolocalisation);
            const response = await axios ("https://api.weatherbit.io/v2.0/forecast/daily", {
                params: {
                    key: weatherApiKey,
                    lang: "fr",
                    lat: geolocalisation.coords.latitude,
                    lon: geolocalisation.coords.longitude,
                    days: 14,                    
                }
            })
            commit("SET_FORECAST", response.data.data)
        },
        async getCityLocation({commit}) {
            const geolocalisation = await getCoordinates();
            const response = await axios ("https://api.weatherbit.io/v2.0/forecast/daily", {
                params:{
                    key: weatherApiKey,
                    lang: "fr",
                    lat: geolocalisation.coords.latitude,
                    lon: geolocalisation.coords.longitude,
                    days: 14,
                }    
            })
            commit("SET_CITY", response.data)    
        }
    }
})