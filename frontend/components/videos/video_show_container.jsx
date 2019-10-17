import { connect } from 'react-redux';
import VideoShow from './video_show';
import { requestVideos, requestVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  let videoId = ownProps.match.params.video_id;
  let video = state.entities.videos[videoId];
  let currentUserId = state.session.id;
  let videoComments;
  if (video) videoComments = state.entities.videos[videoId].comments;
  return ({
    video,
    videoId,
    videos: Object.values(state.entities.videos),
    currentUserId,
    videoComments
  });
};

const mapDispatchToProps = dispatch => ({
  requestVideos: () => dispatch(requestVideos()),
  requestVideo: videoId => dispatch(requestVideo(videoId)),
  deleteVideo: videoId => dispatch(deleteVideo(videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);