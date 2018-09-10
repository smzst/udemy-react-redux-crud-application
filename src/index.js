import React from 'react';
import ReactDOM from 'react-dom';
// applyMiddleware: thunkのようなmiddlewareを適用するため
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
