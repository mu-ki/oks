import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App1 from '../src/pages/App1';
// import App2 from '../src/pages/App2';
// import App3 from '../src/pages/App3';
// import App15 from '../src/pages/App15';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
