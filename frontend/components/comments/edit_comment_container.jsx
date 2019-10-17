import { connect } from 'react-redux';
import CommentFormComponent from './comment_form_component';
import { updateComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  let videoId = ownProps.video_id;
  let comment = ownProps.comment;
  let userId = state.session.id;
  let user = state.entities.users[userId].username;
  return {
  formType: 'Edit Video',
  comment,
  videoId,
  user
  };
};

const mapDispatchToProps = dispatch => ({
  formAction: (comment, videoId) => dispatch(updateComment(comment, videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormComponent);