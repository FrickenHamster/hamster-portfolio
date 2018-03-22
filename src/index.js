import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery/src/jquery';


//import 'popper.js';
//import 'bootstrap';
//import 'bootstrap/js/dist/util';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import jquery from 'jquery'
window.jQuery = window.$ = jquery;
require('bootstrap');


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
