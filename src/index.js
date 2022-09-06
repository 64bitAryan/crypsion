import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MarketplaceProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MarketplaceProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </MarketplaceProvider>
);

reportWebVitals();
