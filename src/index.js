import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/tribal-styles.css';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-oi6n5oy6tlk87mrk.us.auth0.com';
const clientId = 'vRSNmBVJXoAEeNVI8iEakqgEVK4WlMjT';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain = {domain}
      clientId={clientId}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
