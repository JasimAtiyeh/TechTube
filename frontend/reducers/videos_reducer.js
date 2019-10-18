import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO
} from '../actions/video_actions';
import {
  RECEIVE_VIDEO_LIKE,
  REMOVE_VIDEO_LIKE,
  RECEIVE_COMMENT_LIKE,
  REMOVE_COMMENT_LIKE
} from '../actions/like_actions';
import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge';

const VideosReducer = (oldState = {}, action) => {
  let newState;
  let like_status;
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
      like_status = action.response.like ? 'like' : 'dislike';
      return merge({}, oldState, { [action.response.likable_id]: {like_status: like_status}});
    case REMOVE_VIDEO_LIKE:
      newState = merge({}, oldState);
      delete newState[action.videoId].like_status;
      return newState;
    case RECEIVE_ALL_COMMENTS:
      return merge({}, oldState, { [action.videoId]: {comments: Object.keys(action.comments).reverse()}});
    case RECEIVE_COMMENT:
      let videoComments = oldState[action.comment.video_id].comments;
      videoComments.unshift(action.comment.id.toString());
      return merge({}, oldState, { [action.comment.video_id]: { comments: videoComments}});
      // oldState[action.comment.video_id].comments.push([action.comment.id].toString())
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.videoId].commentId;
      return newState;
    case RECEIVE_COMMENT_LIKE:
      like_status = action.response.like ? 'like' : 'dislike';
      return merge({}, oldState, { [action.response.videoId]: {[action.response.likable_id]: {like_status: like_status}}});
    case REMOVE_COMMENT_LIKE:
      newState = merge({}, oldState);
      delete newState[action.comment.videoId].comment.like_status;
      return newState;
    default:
      return oldState;
  }
};

export default VideosReducer;