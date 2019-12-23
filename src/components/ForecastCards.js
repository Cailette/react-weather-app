import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const moment = require('moment');

const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
    },
    marginL: {
        marginLeft: '1rem',
    },
    paperPadding: {
        padding: '1rem',
        margin: '0.5rem 0'
    },
    zeroPadding: {
        padding: '0'
    }
}));

function ForecastCards(props) {
    const classes = useStyles();

    const getUniqueDays = () => {
        let uniqueDays = [];
        var lookupObject  = {};

        for(var i in props.forecastWeatherForCity) {
            lookupObject[props.forecastWeatherForCity[i]["date"]] = props.forecastWeatherForCity[i];
        }

        for(i in lookupObject) {
            uniqueDays.push(lookupObject[i]);
        }

        return uniqueDays
    }

    const generateForecast = () => {
        const uniqueDays = getUniqueDays();
        return uniqueDays.map(day => (
            <div key={day.date}>
                <Typography variant="h5" display="inline">
                    { moment(day.date).isoWeekday() === (new Date).getDay() ? "Today" : day.weekday }
                </Typography>
                <Typography variant="h6" className={classes.marginL} display="inline">
                    {day.date}
                </Typography>
                {
                    generateForecastForWeekDay(getWeatherForWeekday(day.date))
                }
            </div>
        ))};

        const getWeatherForWeekday = (date) => {
            return props.forecastWeatherForCity.filter(weather =>
                weather.date === date
            );
        }

        const generateForecastForWeekDay = (forecastWeatherForDay) => {
            return forecastWeatherForDay.map(item => (
                <Paper key={item.date + "" + item.hour} className={classNames(classes.root, classes.paperPadding)}>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center">
                        <Grid item xs={6} md={4}>
                            <Typography variant="h5">
                                {item.hour}
                            </Typography>
                            <Typography gutterBottom>
                                Conditions: {item.weatherCondition}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Typography gutterBottom>
                                Pressure: {item.pressure}hPa
                            </Typography>
                            <Typography>
                                Humidity: {item.humidity}%
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <img src={"https://openweathermap.org/img/wn/" + item.img + "@2x.png"} alt="weather icon" />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Typography variant="h4" >
                                    {item.temperature}&deg;
                                </Typography>
                                <Typography variant="subtitle1" className={classes.marginL}>
                                    Feel {item.temperatureFeel}&deg;
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        ))};

    return (
        <Container
            display="flex"
            className={classNames(classes.marginB, classes.zeroPadding)}>
            <Typography variant="h4">
                Forecast:
            </Typography>
            { props.forecastWeatherForCity ? generateForecast() : 'Loading...' }
        </Container>
    );
}

export default ForecastCards;
