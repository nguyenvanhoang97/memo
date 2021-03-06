import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostRenderProps from "./PostRenderProps";
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import allReducers from "./reducers";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from "react-router-dom";
import thunk from "redux-thunk";
import UsersContainer from "./reduxThunk";
import UsersContainer2 from "./thunkRedux2";

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path='/post' component={PostRenderProps} />
            <Route path='/redux' component={UsersContainer} />
            <Route path='/redux2' component={UsersContainer2} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
