import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Theme } from "./Theme";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";

import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Router>
    <Auth0ProviderWithNavigate>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Auth0ProviderWithNavigate>
  </Router>


      // <ThemeProvider theme={Theme}>
      //   <App />
      // </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
