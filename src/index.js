import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App  baseUrl={'http://localhost:8153/api.rsc'} user={'admin'} pass={'8e3E4b4g4D4x7s5M7b8p'} />, document.getElementById('root'));
    registerServiceWorker();
