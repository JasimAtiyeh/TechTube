import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = () => ({
  formType: 'Upload Video',
  video: {title: '', description: ''}
});

const mapDispatchToProps = dispatch => ({
  formAction: fromData => dispatch(createVideo(fromData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm);