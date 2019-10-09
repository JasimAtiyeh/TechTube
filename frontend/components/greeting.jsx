import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById("session-state").classList.add("show");
    document.addEventListener("click", () => (
      document.getElementById("session-state").classList.remove("show")
    ));

  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick());
  }

  render() {
    let header;
    let currentUser;
    if (this.props.currentUser) {
      header = (
        <button className='current-user' onClick={this.props.logout}>Logout</button>
      )
      currentUser = this.props.currentUser.username[0].toUpperCase();
    } else {
      header = (
        <div className='no-current-user'>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )
    }
    
    return (
      <div className="dropdown">
        <button
          onClick={this.handleClick}
          className="dropdownbtn">
            {!currentUser ? '' : currentUser ? currentUser : 'G'}
        </button>
        <div id="session-state" className="dropdown-content">
          {header}
        </div>
      </div>
    )
  }
}

export default Greeting;