import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

const styles = {
    root: {
        background: "rgba(255,255,255,0.12)"
    },
    input: {
        color: "white"
    },
    searchPadding: {
        padding: '0 1rem',
    }
};

function Navbar(props) {
    const { classes } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const searchCityInput = () => {
        return (
            <Paper component="form" className={classNames(classes.root, classes.searchPadding)}>
                <InputBase
                    className={classes.input}
                    placeholder="Search city"
                    inputProps={{ 'aria-label': 'search city' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon className={classes.input} />
                </IconButton>
            </Paper>
        );
    }

    const menuButton = () => {
        return (
            <div>
                <IconButton aria-controls="preferences-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon style={{color: "white"}}/>
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
        <Container
            component="div"
            width={1}
            style={{height: '64px', padding: '0px'}}
            position="static">
            <AppBar>
                <Container style={{padding: '0px'}} maxWidth="md">
                    <Toolbar>
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
        </Container>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
