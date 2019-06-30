import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import DashBoard from '../src/components/DashBoard';
import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';
import PhoneCode from '../src/components/PhoneCode';
import QuestionPage from '../src/components/QuestionPage';
import OtherInformation from '../src/components/OtherInformation';

import './index.css';
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={RegisterForm} />
      <Route path="/DashBoard" component={DashBoard} />
      <Route path="/Phone-code" component={PhoneCode} />
      <Route exact  path="/Register" component={RegisterForm} />
      <Route path="/Login" component={LoginForm} />
      <Route path="/Questions" component={QuestionPage} />
      <Route path="/Other-information" component={OtherInformation} />
    </div>
  </Router>
)
ReactDOM.render(
  routing ,
  document.getElementById('root')
);