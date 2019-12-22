import React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import weatherOpenAPI from "../axiosInstance";
import currentWeatherInCity from "../models/currentWeatherInCity";
import forecastWeatherForDay from "../models/forecastWeatherForDay";

const DEFAULT_GEOLOCATION = { LAT: 52.235470, LON: 21.041910}

const getWeatherByLatLon = async (lat, lon) => {
    const response = await weatherOpenAPI.getWeatherByLatLon(lat, lon).get();
    return response.data;
}

const getForecastByLatLon = async (lat, lon) => {
    const response = await weatherOpenAPI.getForecastByLatLon(lat, lon).get();
    return response.data;
}

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeatherInCity: null,
            forecastWeatherForCity: []
        };
    }

    async componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.getWeatherForGeolocation(position.coords.latitude, position.coords.longitude);
                },
                (err) => {
                    this.getWeatherForGeolocation(DEFAULT_GEOLOCATION.LAT, DEFAULT_GEOLOCATION.LON)
                },
                { timeout: 0 }
                );
        } else {
            await this.getWeatherForGeolocation(DEFAULT_GEOLOCATION.LAT, DEFAULT_GEOLOCATION.LON);
        }
    }

    async getWeatherForGeolocation(lat, lon){
        let responseWeatherData = await getWeatherByLatLon(lat, lon);
        let responseForecastData = await getForecastByLatLon(lat, lon);
        this.setCurrentWeatherData(responseWeatherData, lat, lon)
        this.setForecastWeatherData(responseForecastData.list)
    }

    setCurrentWeatherData(currentWeatherData){
        this.setState({
            currentWeatherInCity: new currentWeatherInCity(
                currentWeatherData.name,
                currentWeatherData.sys.country,
                currentWeatherData.coord.lat,
                currentWeatherData.coord.lon,
                currentWeatherData.sys.sunrise,
                currentWeatherData.sys.sunset,
                new Date(),
                currentWeatherData.main.pressure,
                currentWeatherData.main.humidity,
                currentWeatherData.weather[0].description,
                currentWeatherData.weather[0].icon,
                currentWeatherData.wind.speed,
                currentWeatherData.wind.deg,
                currentWeatherData.main.feels_like,
                currentWeatherData.main.temp
            )
        })
    };

    setForecastWeatherData(forecastWeatherDataList){
        var forecastWeatherForCity = []
        for(let forecast of forecastWeatherDataList){
            forecastWeatherForCity.push(new forecastWeatherForDay(
                forecast.dt_txt.slice(0, 16),
                forecast.main.pressure,
                forecast.main.humidity,
                forecast.weather[0].description,
                forecast.weather[0].icon,
                forecast.main.feels_like,
                forecast.main.temp
            ))
        }
        console.log(forecastWeatherForCity)
        this.setState({forecastWeatherForCity: forecastWeatherForCity})
    };

    render() {
        return (
            <Box component="div" width={1}>
                <div style={{height: '64px'}} >
                    <Navbar/>
                </div>
                <div style={{minHeight: 'calc(100vh - 64px)'}}>
                    <Body
                        currentWeatherInCity={this.state.currentWeatherInCity}
                        forecastWeatherForCity={this.state.forecastWeatherForCity} />
                </div>
                <div style={{backgroundColor: '#eeeeee', minHeight: '50px'}} >
                    <Footer/>
                </div>
            </Box>
        )
    };
}

export default Main;
