import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers';
import { createStore } from 'redux';

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);