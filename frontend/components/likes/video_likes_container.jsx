import { connect } from 'react-redux';
import VideoLikeComponent from './video_likes_component';
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  let videoId = ownProps.likeableId;
  let numLikes = state.entities.videos[videoId].num_likes;
  let numDislikes = state.entities.videos[videoId].num_dislikes;
  let likeStatus = state.entities.videos[videoId].like_status;
  
  return {
    videoId,
    likeStatus,
    numLikes,
    numDislikes
  };
};

const mapDispatchToProps = dispatch => ({
  createVideoLike: (like, video_id) => dispatch(createVideoLike(like, video_id)),
  deleteVideoLike: videoId => dispatch(deleteVideoLike(videoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoLikeComponent);