import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {createStore} from 'redux'
import {Provider} from 'react-redux';

// if used export default - not required {} -> but can only use once
import {reducer} from './reducer'


const storeName = createStore(reducer);




ReactDOM.render(
  <React.StrictMode>
    {/* Wrapping App in provider store - every component will know of store */}
    <Provider store={storeName}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
