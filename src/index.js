import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import store from './components/Redux/store';

ReactDOM.render((
  <BrowserRouter>
    <App store={store}/>  
  </BrowserRouter>
 ), document.getElementById('root'));
serviceWorker.unregister();
