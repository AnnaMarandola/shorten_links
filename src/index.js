import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import '@fontsource/roboto';

let theme =createMuiTheme({
typography: {
  useNextVariants: true,
  fontFamily: "Roboto",
  h1: {
    color: "black",
    fontSize: "4rem",
    '@media (max-width:600px)': {
      fontSize: "3rem",
    },
  }
},

overrides: {
  MuiCssBaseline: {
    "@global": {
      "@font-face": "Roboto",
    },
  } 
},

palette: {
  primary: {
    main: "#34313D",
    deepBlue: "#3A3054",
    seaBlue: "#4B3F6B",
    grey: "#9E9AA8",
    turquoise: "#2BD0D0",
    whiteish: "#EFF1F7",
  },
},

})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
