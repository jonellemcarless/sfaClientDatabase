import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import './index.css';
import store from "./config/store";
import App from './App';


// 
const app = <Provider store={store}>
 <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider>

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root")
ReactDOM.render(app, rootElement);