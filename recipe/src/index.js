import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the change in import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root element and render the app using createRoot method
const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: For web vitals measurement (not necessary for your app to work)
reportWebVitals();
