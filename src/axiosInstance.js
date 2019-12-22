import axios from 'axios';

var weatherOpenAPI = {
    getWeatherByCity: function(city) {
    return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: 1500
        }
    )},

    getForecastByCity: function(city) {
    return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: 1500
        }
    )},

    getWeatherByLatLon: function(lat, lon) {
        return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: 1500
        }
    )},

    getForecastByLatLon: function(lat, lon) {
        return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: 1500
        }
    )},
}

export default weatherOpenAPI;