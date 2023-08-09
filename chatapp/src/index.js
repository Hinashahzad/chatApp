import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './context/appContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
