import React from 'react';
import GreetingContainer from './components/greeting_container';
import {Link} from 'react-router-dom';
import SignupFormContainer from './components/signup_form_container';
import LoginFormContainer from './components/login_form_container';
import AuthRoute from './util/route_util';

const App = () => (
  <div>
    <header className='navbar'>
      <Link to={'/'}>
        <img className='logo-nav' src={window.logo} alt="logo" />
      </Link>
      <GreetingContainer/>
    </header>

    <AuthRoute exact path='/login' component={LoginFormContainer}/>
    <AuthRoute exact path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;