import React from 'react';

class CommentFormComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: this.props.comment.body,
      videoId: this.props.videoId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.body;
    let videoId = this.state.videoId;
    this.props.formAction(body, videoId);
    this.setState({ body: '' });
  }

  render() {
    let user = this.props.user;

    return (
      <div className='comment-form'>
        <button className='user-icon'>
          {user[0].toUpperCase()}
        </button>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            placeholder='Add a comment'
            onChange={this.update('body')}/>
          <button className='comment-form-submit' type='submit'>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default CommentFormComponent;