import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO
} from '../actions/video_actions';
import {
  RECEIVE_VIDEO_LIKE,
  REMOVE_VIDEO_LIKE
} from '../actions/like_actions';
import merge from 'lodash/merge';

const VideosReducer = (oldState = {}, action) => {
  let newState;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, oldState, action.videos);
    case RECEIVE_VIDEO:
      return merge({}, oldState, {[action.video.id]: action.video});
    case REMOVE_VIDEO:
      newState = merge({}, oldState);
      delete newState[action.videoId];
      return newState
    case RECEIVE_VIDEO_LIKE:
      let like_status = action.response.like ? 'like' : 'dislike';
      return merge({}, oldState, { [action.response.likable_id]: {like_status: like_status}});
    case REMOVE_VIDEO_LIKE:
      newState = merge({}, oldState);
      delete newState[action.videoId].like_status;
      return newState;
    default:
      return oldState;
  }
};

export default VideosReducer;