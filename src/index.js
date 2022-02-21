import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/argon.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/main.css";

import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.register();
