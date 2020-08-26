import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostRenderProps from "./PostRenderProps";
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from "react-router-dom";

const store = createStore(allReducers)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={App} />
                <Route path='/post' component={PostRenderProps} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
