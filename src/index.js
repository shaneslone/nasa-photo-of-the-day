import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

const StyledApp = styled.div`
background-image: url(${pr => pr.theme.backgroundImg});
background-size: cover;
background-repeat: no-repeat;
border: 10px solid black;
height: 100vh;
`;

ReactDOM.render(<ThemeProvider theme={theme}><StyledApp><App /></StyledApp></ThemeProvider>, document.getElementById("root"));
