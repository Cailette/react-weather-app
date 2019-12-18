import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white"
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
                                <MenuItem onClick={handleClose} disabled>Language</MenuItem>
                                <MenuItem onClick={handleClose} disabled>Theme</MenuItem>
                                <MenuItem onClick={handleClose} disabled>Unit</MenuItem>
                            </Menu>
                            <Box display="flex" flexDirection="row">
                                <WbSunnyIcon style={{color: "white", marginRight: '0.5rem'}}/>
                                <Typography style={{color: "white"}}>
                                    Weather
                                </Typography>
                            </Box>
                            <Box display="flex"
                                 flexDirection="row"
                                 alignItems="center">
                                <SearchIcon style={{color: "white", marginRight: '0.5rem'}}/>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    id="city-search"
                                    label="Search city"
                                    InputProps={{ className: classes.input }}/>
                            </Box>
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
