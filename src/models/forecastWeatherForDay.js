const moment = require('moment');

class forecastWeatherForDay {
    constructor(
        date,
        pressure,
        humidity,
        weatherCondition,
        img,
        temperatureFeel,
        temperature
    ) {
        this.weekday = moment(date).format('dddd');
        this.date = moment(date).format('DD/MM/YY');
        this.hour = moment(date).format('HH:mm');
        this.pressure = pressure;
        this.humidity = humidity;
        this.weatherCondition = weatherCondition;
        this.img = img;
        this.temperature = Math.round(temperature);
        this.temperatureFeel = Math.round(temperatureFeel);
    }
}

export default forecastWeatherForDay