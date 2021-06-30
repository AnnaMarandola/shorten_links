import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/poppins"; 

let theme =createMuiTheme({
typography: {
  useNextVariants: true,
  fontFamily: "Poppins",
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
      "@font-face": "Poppins",
    },
  } 
},

palette: {
  primary: {
    main: "#34313D",
    deepBlue: "#3A3054",
    purple: "#4B3F6B",
    grey: "#9E9AA8",
    turquoise: "#2BD0D0",
  },
  secondary: {
    main: "#34313D",
    whiteish: "#EFF1F7",
    clearBlue: "#9AE3E3",
    
  }
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
