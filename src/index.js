import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { Theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";
import { Provider } from "react-redux";
import store from "./redux/features/store";

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));







root.render(
  <Router>
    <Auth0ProviderWithNavigate>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Auth0ProviderWithNavigate>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






