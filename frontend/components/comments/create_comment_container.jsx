import { connect } from 'react-redux';
import CommentFormComponent from './comment_form_component';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let videoId = ownProps.videoId;
  let userId = state.session.id;
  let user = state.entities.users[userId].username;
  return {
  formType: 'Create Comment',
  comment: { body: '' },
  videoId,
  user
  };
};

const mapDispatchToProps = dispatch => ({
  formAction: (body, videoId) => dispatch(createComment(body, videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentFormComponent);