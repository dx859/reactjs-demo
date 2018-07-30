import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store";
import App from './App';
import {hot} from 'react-hot-loader';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let HotApp = hot(module)(App);

ReactDOM.render(
  <Provider store={store}>
    <HotApp/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
