import { connect } from 'react-redux';
import VideoForm from './video_form';
import { updateVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  let videoId = ownProps.match.params.video_id;
  let video = state.entities.videos[videoId];
  return ({
    formType: 'Update Video',
    video
  });
};

const mapDispatchToProps = dispatch => ({
  formAction: fromData => dispatch(updateVideo(fromData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm);