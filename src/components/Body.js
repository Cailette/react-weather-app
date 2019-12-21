import React from 'react';
import Grid from '@material-ui/core/Grid';
import ForecastHeader from "./ForecastHeader";
import ForecastDays from "./ForecastDays";
import ForecastChart from "./ForecastChart";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from "@material-ui/core/Card";


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

function Body() {
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
                flexDirection="row"
                maxWidth="md"
                alignItems="center"
                className={classNames(classes.bgColor, classes.bodyPadding, classes.marginB)}>
                <ForecastHeader/>
                <ForecastDays/>
                <ForecastChart/>
            </Container>
        </Grid>
    );
}

export default Body;
