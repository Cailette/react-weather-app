import React from 'react';
import Main from './Main'
import { useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export class App extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem('unit')) {
            localStorage.setItem('unit', 'C')
        }
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light')
        }
    }

    render() {
        return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Main/>
          </ThemeProvider>
      );
    }
}

export default App;
