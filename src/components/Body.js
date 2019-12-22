import React from 'react';
import Grid from '@material-ui/core/Grid';
import ForecastHeader from "./ForecastHeader";
import ForecastCards from "./ForecastCards";
import ForecastChart from "./ForecastChart";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
    },
    bodyPadding: {
        [theme.breakpoints.down('md')]: {
            padding: '0',
            margin: '0'
        },
        [theme.breakpoints.up('md')]: {
            padding: '1rem'
        }
    },
    bgColor: {
        backgroundColor: '#eeeeee'
    }
}));

function Body(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.bodyPadding}>
            <Container
                display="flex"
                display="flex"
                maxWidth="md"
                className={classNames(classes.bgColor, classes.bodyPadding, classes.marginB)}>
                <ForecastHeader currentWeatherInCity = {props.currentWeatherInCity} />
                <ForecastCards forecastWeatherForCity={props.forecastWeatherForCity} />
                <ForecastChart/>
            </Container>
        </Grid>
    );
}

export default Body;
