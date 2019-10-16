import { connect } from 'react-redux';
import CommentLikeComponent from './comment_likes_component';
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  // let videoId = ownProps.match.params.video_id;
  // let currentUserId = state.session.id;
  // return {currentUserId, videoId};
};

const mapDispatchToProps = dispatch => ({
  createCommentLike: like => dispatch(createCommentLike(like)),
  deleteCommentLike: like => dispatch(deleteCommentLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentLikeComponent);