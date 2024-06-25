import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your custom styles
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance in your application, uncomment the line below
// Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
