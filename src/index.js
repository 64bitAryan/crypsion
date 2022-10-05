import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MarketplaceProvider } from './context/TransactionContext';
import Item from './components/Create/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MarketplaceProvider>
    <React.StrictMode>
      <Item/>      
    </React.StrictMode>
  </MarketplaceProvider>
);

reportWebVitals();
