import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
    },
    root: {
        background: "#3949ab",
        color: "white"
    },
}));

function ForecastHeader(props) {
    const classes = useStyles();

    const renderCurrentWeatherData = (rows) => {
        const href = "https://openweathermap.org/img/wn/" + props.currentWeatherInCity.img + "@2x.png";
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3}
                          display="flex">
                        <Typography  variant="caption">
                            Sunrise: {props.currentWeatherInCity.sunrise}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          display="flex">
                        <Typography variant="caption">
                            Sunset: {props.currentWeatherInCity.sunrise}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="caption">
                            Latitude: {props.currentWeatherInCity.lat}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          display="flex">
                        <Typography variant="caption">
                            Longitude: {props.currentWeatherInCity.lon}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                            {props.currentWeatherInCity.city}, {props.currentWeatherInCity.countryCode}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="h4">
                            {props.currentWeatherInCity.temperature}&deg;
                        </Typography>
                        <Typography variant="subtitle1">
                            Feel {props.currentWeatherInCity.temperatureFeel}&deg;
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <img src={href} alt="weather icon" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography gutterBottom>
                            Conditions: {props.currentWeatherInCity.weatherCondition}
                        </Typography>
                        <Typography gutterBottom>
                            Pressure: {props.currentWeatherInCity.pressure} hPa
                        </Typography>
                        <Typography>
                            Humidity: {props.currentWeatherInCity.humidity} %
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography gutterBottom>
                            Wind speed: {props.currentWeatherInCity.windSpeed} km/h
                        </Typography>
                        <Typography>
                            Wind direction: {props.currentWeatherInCity.windDirection}&deg;
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    };

    return (
        <Card className={classNames(classes.marginB, classes.root)}>
            <CardContent>
                {props.currentWeatherInCity ? renderCurrentWeatherData() : "Loading..."}
            </CardContent>
        </Card>
    );
}

export default ForecastHeader;
