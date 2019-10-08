import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = props => {

  if (props.currentUser) {
    return (
      <div>
        <h3>{`Welcome ${props.currentUser.username}!`}</h3>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Greeting;