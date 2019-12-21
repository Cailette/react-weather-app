import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core/styles";

import ForecastHeader from "./ForecastHeader";
import ForecastChart from "./ForecastChart";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
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

const rows = [
    createData('Monday', '23/12/19', 6.0,
        'rainy', 4, 'SE', 6, 17),
    createData('Thursday', '24/12/19', 16.0,
        'rainy', 6, 'NE', 7,18),
    createData('Wednesday', '25/12/19', 9.0,
        'cloudly', 4, 'NE', 8, 18),
    createData('Tuesday', '26/12/19', 3.7,
        'rainy', 4, 'N', 4, 15),
    createData('Friday', '27/12/19', 16.0,
        'sunny', 3, 'SW', 4, 12),
];

function ForecastDays() {
    const classes = useStyles();

    const generateForecast = (rows) => {
        return rows.map(item => (
            <Paper className={classNames(classes.root, classes.paperPadding)}>
                <Grid
                    container
                    spacing={3}
                    alignItems="center">
                    <Grid item xs={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            {item.weekday}
                        </Typography>
                        <Typography variant="subtitle2">
                            {item.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Typography gutterBottom>
                            Conditions: {item.weatherCondition}
                        </Typography>
                        <Typography>
                            Humidity: {item.humidity}%
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography>
                            IMG
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" display="inline">
                            {item.temperatureMin}&deg;C
                        </Typography>
                        <Typography variant="h4" display="inline">
                            {item.temperatureMax}&deg;C
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        ))};

    return (
        <Container
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={classNames(classes.marginB, classes.zeroPadding)}>
            <Typography variant="h4">
                Daily Forecast:
            </Typography>
            {generateForecast(rows)}
        </Container>
    );
}

export default ForecastDays;
