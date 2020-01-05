import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import {makeStyles} from "@material-ui/core/styles";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WavesOutlinedIcon from '@material-ui/icons/WavesOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import UnfoldLessOutlinedIcon from '@material-ui/icons/UnfoldLessOutlined';
import PanoramaHorizontalOutlinedIcon from '@material-ui/icons/PanoramaHorizontalOutlined';
import PanoramaVerticalOutlinedIcon from '@material-ui/icons/PanoramaVerticalOutlined';


const useStyles = makeStyles(theme => ({
    marginB: {
        marginBottom: '1rem',
    },
    marginL: {
        marginLeft: '1rem',
    },
    marginR: {
        marginRight: '1rem',
    },
    marginR2: {
        marginRight: '0.5rem',
    },
    root: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
    },

    maxHeight60: {
        maxHeight: '70px'
    },
    centerVertically: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
}));

function ForecastHeader(props) {
    const classes = useStyles();

    const renderCurrentWeatherData = (rows) => {
        const href = "https://openweathermap.org/img/wn/" + props.currentWeatherInCity.img + "@2x.png";
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3}>
                        <Typography  variant="caption" className={classes.centerVertically}>
                            <Brightness1OutlinedIcon
                                fontSize="small"
                                className={classes.marginR2}/>
                                Sunrise: {props.currentWeatherInCity.sunrise}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="caption"
                            className={classes.centerVertically}>
                            <Brightness2OutlinedIcon
                                fontSize="small"
                                className={classes.marginR2}/>
                                Sunset: {props.currentWeatherInCity.sunset}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3} >
                        <Typography
                            variant="caption"
                            className={classes.centerVertically}>
                            <PanoramaHorizontalOutlinedIcon
                                fontSize="small"
                                className={classes.marginR2}/>
                                Latitude: {props.currentWeatherInCity.lat}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="caption"
                            className={classes.centerVertically}>
                            <PanoramaVerticalOutlinedIcon
                                fontSize="small"
                                className={classes.marginR2}/>
                                Longitude: {props.currentWeatherInCity.lon}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                            {props.currentWeatherInCity.city}, {props.currentWeatherInCity.countryCode}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center" >
                            <Typography variant="h3" >
                                {props.currentWeatherInCity.temperature}&deg;{localStorage.getItem('unit') === 'C' ? 'C' : 'F'}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                className={classes.marginL}>
                                Feel {props.currentWeatherInCity.temperatureFeel}&deg;
                            </Typography>
                            <img src={href} alt="weather icon" />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            gutterBottom
                            className={classes.centerVertically}>
                            <InfoOutlinedIcon
                                fontSize="small"
                                className={classes.marginR}/>
                                Conditions: {props.currentWeatherInCity.weatherCondition}
                        </Typography>
                        <Typography
                            gutterBottom
                            className={classes.centerVertically}>
                            <UnfoldLessOutlinedIcon
                                fontSize="small"
                                className={classes.marginR}/>
                                Pressure: {props.currentWeatherInCity.pressure}hPa
                        </Typography>
                        <Typography
                            className={classes.centerVertically}>
                            <WavesOutlinedIcon
                                fontSize="small"
                                className={classes.marginR}/>
                                Humidity: {props.currentWeatherInCity.humidity}%
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            gutterBottom
                            className={classes.centerVertically}>
                            <ArrowForwardOutlinedIcon
                                fontSize="small"
                                className={classes.marginR}/>
                                Wind speed: {props.currentWeatherInCity.windSpeed}km/h
                        </Typography>
                        <Typography
                            className={classes.centerVertically}>
                            <CallMadeOutlinedIcon
                                fontSize="small"
                                className={classes.marginR}/>
                                Wind direction: {props.currentWeatherInCity.windDirection}&deg;
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    };

    return (
        <Card color="secondary" className={classNames(classes.marginB, classes.root)}>
            <CardContent >
                {props.currentWeatherInCity ? renderCurrentWeatherData() : "Loading..."}
            </CardContent>
        </Card>
    );
}

export default ForecastHeader;
