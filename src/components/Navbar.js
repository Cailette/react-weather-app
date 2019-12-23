import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    searchBg: {
        background: "rgba(255,255,255,0.12)"
    },
    whiteColor: {
        color: "white"
    },
    searchPadding: {
        paddingLeft: '1rem',
    },
    toolbarSizing: {
        height: '64px',
    },
    marginY: {
        margin: '0.5rem',
    },
    navPadding: {
        [theme.breakpoints.down('xs')]: {
            padding: '0',
        }
    },
    searchWidth: {
        [theme.breakpoints.down('md')]: {
            width: '150px',
        },
        [theme.breakpoints.up('md')]: {
            width: '200px',
        }
    }
}));

function Navbar(props) {
    const preventDefault = event => event.preventDefault();
    const [searchCity, setSearchCity] = React.useState('');
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const searchChange = (event) => {
        setSearchCity(event.target.value);
    };

    const searchByCity = (event) => {
        if (event.key === 'Enter') {
            search()
            event.preventDefault();
        }
    }

    const search = () => {
        props.searchHandler(searchCity)
        setSearchCity('');
    }

    const searchCityInput = () => {
        return (
            <Paper component="form" className={classNames(classes.searchBg, classes.searchPadding)}>
                <InputBase
                    className={classNames(classes.whiteColor, classes.searchWidth)}
                    placeholder="Search city"
                    inputProps={{ 'aria-label': 'search city' }}
                    onChange={searchChange}
                    onKeyPress={searchByCity}
                    value={searchCity}
                />
                <IconButton onClick={search} className={classes.iconButton} aria-label="search">
                    <SearchIcon className={classes.whiteColor} />
                </IconButton>
            </Paper>
        );
    }

    const menuButton = () => {
        return (
            <div>
                <IconButton aria-controls="preferences-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon className={classes.whiteColor}/>
                </IconButton>
                <Menu
                    id="preferences-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ marginTop:'50px' }}>
                    <MenuItem onClick={handleClose} disabled>
                        Language
                    </MenuItem>
                    <MenuItem onClick={handleClose} disabled>
                        Theme
                    </MenuItem>
                    <MenuItem onClick={handleClose} disabled>
                        Unit
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    return (
        <AppBar className={classes.navPadding}>
            <Container className={classes.navPadding} maxWidth="md">
                <Toolbar className={classes.toolbarSizing}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        {searchCityInput()}
                        {menuButton()}
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
