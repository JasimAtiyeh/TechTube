import { connect } from 'react-redux';
import VideosIndex from './videos_index';
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
)(VideosIndex);