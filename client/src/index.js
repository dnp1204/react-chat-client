import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './scenes/App';
import './styles/index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'emoji-mart/css/emoji-mart.css'
import registerServiceWorker from './registerServiceWorker';

let middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  
  const reduxLogger = createLogger({
    level: 'log',
    collapsed: true
  });
  
  middlewares.push(reduxLogger);
}

const store = createStore(reducers, {}, compose(applyMiddleware(reduxThunk, ...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();