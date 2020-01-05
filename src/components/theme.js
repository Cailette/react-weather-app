import {createMuiTheme} from "@material-ui/core/styles";
import teal from "material-ui/colors/teal";
import lime from "material-ui/colors/lime";
import grey from "material-ui/colors/grey";

const prefersDarkMode = localStorage.getItem('theme') === 'dark' ? true : false;

const theme = createMuiTheme({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: { main: teal["500"], dark: teal["800"], light: teal["200"] },
        secondary: { main: lime["500"], dark: lime["800"], light: lime["200"] },
        background: {
            default: !prefersDarkMode ? grey["100"] : grey["800"],
            paper: !prefersDarkMode ? grey["200"] : grey["600"],
            container: !prefersDarkMode ? grey["300"] : grey["700"],
        }
    }
});

export default theme;