import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: '',
      password: ''
    });
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let user = {username: 'guest', password: 'password'};
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    let link;
    if (this.props.address === '/signup'){
      link = 'Login';
    } else {
      link = 'Signup';
    }

    return (
      <div className='session-form'>
        <img className='logo-session-form' src={window.logo} alt="logo"/>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Username
            <input
              type="text"
              className="login-inputs"
              value={this.state.username}
              onChange={this.update('username')}/>
          </label>

          <label>Password
            <input
              type="text"
              className="login-inputs"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <div className='signup-login'>
            {/* <Link to={`/${link.toLowerCase()}`} className='signup-login-buttons'>To {link}</Link> */}
            <input type="button" value='Login as guest' className='signup-login-buttons' onClick={this.handleGuestLogin}/>
            <input type="submit" value={this.props.formType} className='signup-login-buttons'/>
          </div>
        </form>

        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default SessionForm;