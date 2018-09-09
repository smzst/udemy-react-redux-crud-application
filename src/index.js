import React from 'react';
import ReactDOM from 'react-dom';
// applyMiddleware: thunkのようなmiddlewareを適用するため
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
