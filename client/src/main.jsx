import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './index.css'
// import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";


// const redirect = 'http://127.0.0.1:5173/products'	// This is the URL that Auth0 will redirect to after a successful login;
// const onRedirectCallback = (appState) => {
//     const history = useHistory();
//     history.push(
//       appState && appState.returnTo
//         ? appState.returnTo
//         : window.location.pathname
//     );
//   };

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Auth0Provider
//         domain="dev-j6b5jyiqseyc7ary.us.auth0.com"
//         clientId="l6zSjjxJKF5KG4Mq458mox0g1dFjKRks"
//         redirectUri="http://127.0.0.1:5173/products"
//         onRedirectCallback={onRedirectCallback}
//     >
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Auth0Provider>,
// )


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
);
