import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  // the user will redirects from '/' path to the path they are intending to access before logging
  const onRedirectCallback = (appState) => {

    // some routes to be protected more that after authentication user will not redirects from home to that path because that path takes some data through navigation

    // navigate(appState?.returnTo || window.location.pathname);

    let redirect = window.location.pathname
    if(appState?.returnTo !== '/files' )
      redirect = appState?.returnTo;

    navigate(redirect)
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate



