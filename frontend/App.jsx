import React from 'react';
import GreetingContainer from './components/greeting_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './components/signup_form_container';
import LoginFormContainer from './components/login_form_container';
import AuthRoute from './util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Boo!Tube</h1>
      <GreetingContainer/>
    </header>

    <AuthRoute path='/login' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;