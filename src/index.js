import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// kick starts our application
// takes all our react components and mounting them to the dom
// React strict - does additional checks and shows warnings if there are any warnings to report
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
