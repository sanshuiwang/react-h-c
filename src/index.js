import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux/store';

import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';

import './index.scss';


/*Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听*/
ReactDom.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('app'));
