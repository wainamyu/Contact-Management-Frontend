import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import rootReducer from "./Reducer/root.Reducer";
import contact from "./component/contact";
import addContact from "./component/addContact"
import login from "./component/login";
import ReduxPromise from "redux-promise";
import { applyMiddleware, createStore } from "redux";


// using redux store here for sharing data with child in a more convenien way and take advantake of state management
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

// single page application by using the route to decide which component should we render
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/contact' component={contact} />
          <Route path='/addcontact' component={addContact} />
          <Route component={login} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
