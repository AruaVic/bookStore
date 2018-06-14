import React from 'react';
import ReactDOM from 'react-dom';
import Index from './app/index';
require('../semantic/dist/semantic.css');
require('./index.css');
ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);