import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

function createData(weekday, date, humidity, weatherCondition, windSpeed, winDirection, temperatureMin, temperatureMax, img) {
    return { weekday, date, humidity, weatherCondition, windSpeed, winDirection, temperatureMin, temperatureMax, img };
}

function ForecastCards(props) {
    const classes = useStyles();

    const generateForecast = () => {
        return props.forecastWeatherForCity.map(item => (
            <Paper key={item.date} className={classNames(classes.root, classes.paperPadding)}>
                <Grid
                    container
                    spacing={3}
                    alignItems="center">
                    <Grid item xs={6} md={4}>
                        {/*<Typography variant="h6" gutterBottom>*/}
                        {/*    {item.weekday}*/}
                        {/*</Typography>*/}
                        <Typography variant="h5">
                            {item.date.slice(11, 16)}
                        </Typography>
                        <Typography gutterBottom>
                            Conditions: {item.weatherCondition}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                            <img src={"https://openweathermap.org/img/wn/" + item.img + ".png"} alt="weather icon" />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography gutterBottom>
                            Pressure: {item.pressure}hPa
                        </Typography>
                        <Typography>
                            Humidity: {item.humidity}%
                        </Typography>
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
