import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";
import classNames from 'classnames';

const styles = {
    marginB: {
        marginBottom: '1rem',
    },
    root: {
        background: "#3949ab",
        color: "white"
    },
    whiteColor: {
        color: "white"
    },
};

function ForecastHeader(props) {
    const { classes } = props;

    return (
        <Card className={classNames(classes.marginB, classes.root)}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3">
                            Miasto, Kraj
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" gutterBottom>
                            N&deg;
                        </Typography>
                        <Typography>
                            Img
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography gutterBottom>
                            Conditions: rainy
                        </Typography>
                        <Typography>
                            Humidity: 20%
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography gutterBottom>
                            Wind speed: 11 km/h
                        </Typography>
                        <Typography>
                            Wind direction: SW
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          display="flex"
                          flexDirection="row">
                        <Typography  variant="caption">
                            Sunrise: HH:mm
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          display="flex"
                          flexDirection="row">
                        <Typography variant="caption">
                            Sunset: HH:mm
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          flexDirection="row">
                        <Typography variant="caption">
                            Latitude: NN.NNNNN
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}
                          display="flex"
                          flexDirection="row">
                        <Typography variant="caption">
                            Longitude: NN.NNNNN
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(ForecastHeader);
