import axios from 'axios';
const TIME_OUT = 5000;

var weatherOpenAPI = {
    
    getWeatherByCity: function(city) {
    return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: TIME_OUT
        }
    )},

    getForecastByCity: function(city) {
    return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: TIME_OUT
        }
    )},

    getWeatherByLatLon: function(lat, lon) {
        return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: TIME_OUT
        }
    )},

    getForecastByLatLon: function(lat, lon) {
        return axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
            timeout: TIME_OUT
        }
    )},
}

export default weatherOpenAPI;