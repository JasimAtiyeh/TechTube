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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: '',
      password: ''
    });
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
      <div className='session_form'>
        <img src="/app/assets/images/boo_tube_logo.png" alt="logo"/>
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

          <div className='signup-login-buttons'>
            <Link  to={`/`} >{link}</Link>
            <input type="submit" value={this.props.formType}/>
          </div>
        </form>

        {/* redirect to root in logged in */}

        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default SessionForm;