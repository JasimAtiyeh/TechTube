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
    this.props.demoLogin(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

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
              type="password"
              className="login-inputs"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <div className='signup-login'>
            {/* <a className='guest-login-button' onClick={this.handleGuestLogin}>Login as guest</a> */}
            <input
              type="button"
              value='Login as guest'
              className='guest-login-button'
              onClick={this.handleGuestLogin}/>
            <input
              type="submit"
              value={this.props.formType}
              className='signup-login-button'/>
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