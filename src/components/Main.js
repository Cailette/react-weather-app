import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";


function Main() {
    return (
        <Box component="div" width={1}>
            <div style={{height: '64px'}} >
                <Navbar/>
            </div>
            <div style={{minHeight: 'calc(100vh - 64px)'}}>
                <Body/>
            </div>
            <div style={{backgroundColor: '#eeeeee', minHeight: '50px'}} >
                <Footer/>
            </div>
        </Box>
    );
}

export default Main;
