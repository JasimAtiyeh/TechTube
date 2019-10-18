import React from 'react';
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {

  componentDidMount() {
    this.props.fetchComments(this.props.videoId);
  }

  componentDidUpdate(oldProps) {
    if (this.props.videoId !== oldProps.videoId) {
      this.props.fetchComments(this.props.videoId);
    }
    // if (this.props.comments !== oldProps.comments) {
    //   this.props.fetchComments(this.props.videoId);
    // }
  }

  render() {
    let comments = this.props.videoComments;
    let commentIndex;

    if (comments) {
        commentIndex = comments.map((comment, idx) => {
        let commentOnVideo = this.props.comments[comment];
        return (
          <li key={idx}>
            <CommentIndexItem
              key={commentOnVideo.id}
              comment={commentOnVideo}
              videoId={this.props.videoId}
              user={this.props.user}
              currentUserId={this.props.currentUserId}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}/>
          </li>
        )
      })
    }

    return (
      <div className='comment-index'>
        {commentIndex}
      </div>
    )
  }
}

export default CommentIndex;