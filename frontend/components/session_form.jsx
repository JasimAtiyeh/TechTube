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
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));
    let link = this.props.address === 'signup' ? 'signup' : 'login';

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}/>
          </label>

          <label>Password
            <input
              type="text"
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <input type="submit" value={this.props.formType}/>
        </form>

        <Link to={`/${link}`}>{link}</Link>
        {/* redirect to root in logged in */}

        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default SessionForm;