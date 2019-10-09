import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      show: false
    };
  }

  handleClick() {
    this.setState({
      show: true
    });
  }

  logout() {
    this.props.logout().then(() => this.setState({
      show: false
    }));
  }

  render() {
    let header;
    let currentUser;
    if (this.props.currentUser) {
      currentUser = this.props.currentUser.username[0].toUpperCase();
      header = (
        <div className="dropdown">
          <button
            onClick={this.handleClick}
            className="dropdownbtn">
            {currentUser}
          </button>
          {this.state.show &&
            (<>
              <div className="modal" onClick={() => this.setState({
                show: false
              })}></div>
              <div id="session-state" className="dropdown-content">
                {/* <Link>Profile</Link> */}
                <button className='current-user' onClick={this.logout}>
                  Logout
                </button>
              </div>
            </>)
          }
        </div>
      )
    } else {
      header = (
        <div className='no-current-user'>
          <Link to="/signup" onClick={() => this.setState({show: false})}>
            Signup
          </Link>
          <Link to="/login" onClick={() => this.setState({show: false})}>
            Login
          </Link>
        </div>
      )
    }
    
    return (
      header
    )
  }
}

export default Greeting;