import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import cartReducer from './cartReducer.js';
import { createContext, useEffect, useReducer } from "react";
//import { cartReducer, initializer } from './cartReducer.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>, 
		document.getElementById('root')
);

//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./App";
//import { CartProvider } from "./CartProvider/index.jsx";

//const rootElement = document.getElementById("root");
//ReactDOM.render(
  //<React.StrictMode>
    //<CartProvider>
     // <App />
    //</CartProvider>
//  </React.StrictMode>,
//  rootElement
//);

//ReactDOM.render(
  //<React.StrictMode>
 //   <App />
 //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
