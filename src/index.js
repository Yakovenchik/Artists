import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MainPage from './shared/Container/MainPage';

const root = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
        </Switch>
    </BrowserRouter>
    , root);
registerServiceWorker();

