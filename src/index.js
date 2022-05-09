import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import LoginReducer from './reducer/LoginReducer';
import SignupReducer from './reducer/SignupReducer';
import UserListReducer from './reducer/UserListReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import RootSaga from './saga/RootSaga';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ login: LoginReducer, signup: SignupReducer, users: UserListReducer }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(RootSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// ServiceWorker.unregister();