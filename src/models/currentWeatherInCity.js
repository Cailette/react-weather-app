const moment = require('moment');

class currentWeatherInCity {
    constructor(
        city,
        countryCode,
        lat,
        lon,
        sunrise,
        sunset,
        date,
        pressure,
        humidity,
        weatherCondition,
        img,
        windSpeed,
        windDirection,
        temperatureFeel,
        temperature
    ) {
        this.city = city;
        this.countryCode = countryCode;
        this.lat = lat;
        this.lon = lon;
        this.sunrise = moment.unix(sunrise).local().format('HH:mm');
        this.sunset = moment.unix(sunset).local().format('HH:mm');
        this.weekday = moment(date).format('dddd');
        this.date = moment(date).format('DD/MM/YY');
        this.pressure = pressure;
        this.humidity = humidity;
        this.weatherCondition = weatherCondition;
        this.img = img;
        this.windSpeed = windSpeed;
        this.windDirection = windDirection;
        this.temperatureFeel = Math.round(temperatureFeel);
        this.temperature = Math.round(temperature);
    }
}

export default currentWeatherInCity