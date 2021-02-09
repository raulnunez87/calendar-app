import React from 'react';
import ReactDOM from 'react-dom';

import CalendarApp from './CalendarApp';

import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// console.log(process.env);

ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);
