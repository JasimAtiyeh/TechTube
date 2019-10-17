import React from 'react';
import EditCommentContainer from '../comments/edit_comment_container';

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      edit: false,
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleClick() {
    this.setState({ show: true });
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

    if (this.state.edit === true) editComponent = <EditCommentContainer comment={comment} videoId={videoId} />

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
              <div className="option-menu-content">
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
          {editComponent || comment.body}
        </div>
        {optionMenu}
      </div>
    )
  }
}

export default CommentIndexItem;