import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './CounterApp';

const divApp = document.querySelector('#app');

ReactDOM.render(<CounterApp value={ 0 }  />, divApp);