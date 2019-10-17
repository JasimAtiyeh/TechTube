import { connect } from 'react-redux';
import CommentIndex from './comment_index_component';
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let videoComments = ownProps.videoComments;
  let videoId = ownProps.videoId;
  let comments = state.entities.comments || [];
  let user = state.entities.videos[videoId].user;
  let currentUserId = state.session.id;
  return {
    videoId,
    comments,
    user,
    currentUserId,
    videoComments
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: videoId => dispatch(fetchComments(videoId)),
  deleteComment: (commentId, videoId) => dispatch(deleteComment(commentId, videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);