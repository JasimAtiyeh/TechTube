import { connect } from 'react-redux';
import VideosSideBar from './video_side_bar';
import { requestVideos } from '../../actions/video_actions';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos),
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  requestVideos: () => dispatch(requestVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosSideBar);