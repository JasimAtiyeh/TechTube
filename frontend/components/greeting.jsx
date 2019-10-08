import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = props => {
  let header;
  if (props.currentUser) {
    return (
      <button className='current_user' onClick={props.logout}>Logout</button>
      // <div className='current_user'>
      //   <h3>{`Welcome ${props.currentUser.username}!`}</h3>
      // </div>
    )
  } else {
    return (
      <div className='no_current_user'>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }

  // return (
  //   <div>
  //     {header}
  //   </div>
  // )
}

export default Greeting;