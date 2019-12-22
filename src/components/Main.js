import React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import weatherOpenAPI from "../axiosInstance";
import currentWeatherInCity from "../models/currentWeatherInCity";


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
            currentWeatherInCity: new currentWeatherInCity()
        };
    }

    async componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) =>  this.getWeatherForGeolocation(position.coords.latitude, position.coords.longitude),
                () => this.getWeatherForGeolocation(52.235470, 21.041910),
                { timeout: 0 }
                );
        } else {
            await this.getWeatherForGeolocation(52.235470, 21.041910);
        }
    }

    async getWeatherForGeolocation(lat, lon){
        let responseData = await getWeatherByLatLon(lat, lon);
        this.setCurrentWeatherData(responseData, lat, lon)
    }

    setCurrentWeatherData(responseData, lat, lon){
        this.setState({
            currentWeatherInCity: new currentWeatherInCity(
                responseData.name,
                responseData.sys.country,
                lat,
                lon,
                responseData.sys.sunrise,
                responseData.sys.sunset,
                new Date(),
                responseData.main.pressure,
                responseData.main.humidity,
                responseData.weather[0].description,
                responseData.weather[0].icon,
                responseData.wind.speed,
                responseData.wind.deg,
                responseData.main.feels_like,
                responseData.main.temp
            )
        })

        console.log(this.state.currentWeatherInCity)
    }

    render() {
        return (
            <Box component="div" width={1}>
                <div style={{height: '64px'}} >
                    <Navbar/>
                </div>
                <div style={{minHeight: 'calc(100vh - 64px)'}}>
                    <Body
                        currentWeatherInCity={this.state.currentWeatherInCity} />
                </div>
                <div style={{backgroundColor: '#eeeeee', minHeight: '50px'}} >
                    <Footer/>
                </div>
            </Box>
        )
    };
}

export default Main;
