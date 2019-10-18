import React from 'react';
import EditCommentContainer from '../comments/edit_comment_container';

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      edit: false,
      show: false,
      body: this.props.comment.body
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleClick() {
    this.setState({ show: true });
  }

  updateComment() {
    let comment = {body: this.state.body, id: this.props.comment.id};
    let videoId = this.props.videoId;

    this.props.updateComment(comment, videoId);
  }

  deleteComment() {
    let videoId = this.props.videoId;
    let commentId = this.props.comment.id;

    debugger;
    this.props.deleteComment(commentId, videoId);
  }

  render() {
    let editComponent;
    let comment = this.props.comment;
    let optionMenu;
    let videoId = this.props.videoId;
    let editCommentField;
    let editButton;

    if (this.state.edit === true) {
      editCommentField = (
        <textarea
          value={this.state.body}
          placeholder='Add a comment'
          onChange={this.update('body')} />
      )
        
      editButton = (
        <button
          className='comment-form-submit'
          onClick={this.updateComment}>
            Update Comment
        </button>
      )
    }
              
    {/* editComponent = <EditCommentContainer comment={comment} videoId={videoId} /> */}

    if (this.props.user.id === this.props.currentUserId) {
      optionMenu = (
        <div className="comment-dropdown">
          <i
            className="material-icons"
            onClick={this.handleClick}>
              more_horiz
          </i>

          {this.state.show &&
            (<>
              <div
                className="modal"
                onClick={() => this.setState({ show: false })}>
              </div>
              <div className="option-menu-content-comment">
                <button
                  className='edit-comment'
                  onClick={() => this.setState({ edit: true })}>
                  Edit Comment
                </button>
                <button
                  className='delete-comment'
                  onClick={this.deleteComment}>
                  Delete Comment
                </button>
              </div>
            </>)
          }
        </div>
      )
    }


    return (
      <div className='comment-index-item'>
        <div className='comment-user-info'>
          <button className='user-icon'>
            {this.props.user.username[0].toUpperCase()}
          </button>
          {editCommentField || comment.body}
        </div>
        {editButton || optionMenu}
      </div>
    )
  }
}

export default CommentIndexItem;