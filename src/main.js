/**
 * Created by yangyang.xu on 2017/10/20.
 */
// const greeter = require('./Greeter');
// document.querySelector("#root").appendChild(greeter());
import React from 'react';
import {render} from 'react-dom';
import App from './app';

render(<App/>, document.getElementById('root'));