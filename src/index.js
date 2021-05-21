import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Todolist2 from './Todolist2'
import reportWebVitals from './reportWebVitals';
import MiniProject from './MiniProject'
import Axios_pokemon from './Axios_pokemon'
ReactDOM.render(
  <React.StrictMode>
    <Axios_pokemon />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
