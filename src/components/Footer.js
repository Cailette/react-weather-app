import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    footerPadding: {
        padding: '1rem 0'
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <Container>
            <Grid
                container
                spacing={3}
                justify="center"
                className={classes.footerPadding}>
                <Grid item>
                    <Typography variant="caption">
                        Iwona Wojtaszek
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">
                        <Link target="_blank" href="https://github.com/Cailette/react-weather-app">
                            GitHub
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">
                        <Link target="_blank" href="https://openweathermap.org/api">
                            Open Weather API
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
