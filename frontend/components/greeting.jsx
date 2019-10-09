import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById("session_state").classList.toggle("show");
  }

  render() {
    let header;
    if (this.props.currentUser) {
      header = (
        <button className='current_user' onClick={this.props.logout}>Logout</button>
      )
    } else {
      header = (
        <div className='no_current_user'>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )
    }

    return (
      <div className="dropdown">
        <button onClick={this.handleClick} className="dropdownbtn">Button</button>
        <div id="session_state" className="dropdown-content">
          {header}
        </div>
      </div>
    )
  }
}

export default Greeting;