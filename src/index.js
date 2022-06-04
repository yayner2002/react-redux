import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

// action 

const inc = () => {
  return{
    type:'INCREMENT'
  }
}
//   const dec = () => {
//     return{
//       type:'DECREMENT'
//     }
// }
//reducer

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
      case 'DECREMENT':
        return state - 1;
        default: return state
  }


}
//dispatch
let store = configureStore(counter)
store.dispatch(inc())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);