import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home';
import Beer from './container/Beer';
import Checkout from './container/Checkout';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >            
            <IndexRoute component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/beer' component={Beer} />
            <Route path='/checkout' component={Checkout} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
