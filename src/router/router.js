import React from 'react';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import Bundle from './Bundle';

import Login from 'bundle-loader?lazy&name=login!../containers/Login';
import LoginDemo from 'bundle-loader?lazy&name=login!../containers/LoginDemo';
import Home from 'bundle-loader?lazy&name=home!../containers/Home';
import Page1 from 'bundle-loader?lazy&name=page1!../containers/Page1';
import Counter from 'bundle-loader?lazy&name=counter!../containers/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo222!../containers/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!../containers/NotFound';

import SurveyDemo from 'bundle-loader?lazy&name=surveyDemo!../containers/SurveyDemo';
import TableDemo from 'bundle-loader?lazy&name=surveyDemo!../containers/TableDemo';

import Loading from '../components/Loading';

const createComponent = (component) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component/> : <Loading/>
    }
  </Bundle>
);

const getRouter = () => (
      <Switch>
        <Route exact path="/" component={createComponent(Login)}/>
        <Route exact path="/loginDemo" component={createComponent(LoginDemo)}/>
        <Route exact path="/home" component={createComponent(Home)}/>
        <Route path="/page1" component={createComponent(Page1)}/>
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/userInfo" component={createComponent(UserInfo)}/>
        <Route path="/surveyDemo" component={createComponent(SurveyDemo)}/>
        <Route path="/tableDemo" component={createComponent(TableDemo)}/>
        <Route component={createComponent(NotFound)}/>
      </Switch>
);

export default getRouter;
