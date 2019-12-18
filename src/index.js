import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Box from "@material-ui/core/Box";

ReactDOM.render(
    <App m={0} />,
    document.getElementById('root')
);

serviceWorker.unregister();
