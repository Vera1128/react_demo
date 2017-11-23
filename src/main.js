/**
 * Created by yangyang.xu on 2017/10/20.
 */
// const greeter = require('./Greeter');
// document.querySelector("#root").appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';
import App from './app';
import Home from './views/Home';
import Detail from './views/Detail';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';

render(
  (<HashRouter history={hashHistory}>
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/detail" component={Detail}/>
    </App>
  </HashRouter>),
  document.getElementById('root')
);