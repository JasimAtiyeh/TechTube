import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_VIDEO_LIKE = 'RECEIVE_VIDEO_LIKE';
export const REMOVE_VIDEO_LIKE = 'REMOVE_VIDEO_LIKE';

export const RECEIVE_COMMENT_LIKE = 'RECEIVE_COMMENT_LIKE';
export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE';

const receiveVideoLike = response => ({
  type: RECEIVE_VIDEO_LIKE,
  response
});

const removeVideoLike = response => ({
  type: REMOVE_VIDEO_LIKE,
  videoId: response.video_id,
  response
});

const receiveCommentLike = response => ({
  type: RECEIVE_COMMENT_LIKE,
  response
});

const removeCommentLike = response => ({
  type: REMOVE_COMMENT_LIKE,
  videoId: response.video_id,
  commentId: response.comment_id
});

export const createVideoLike = (like, video_id) => dispatch => (
  LikeApiUtil.createVideoLike(like, video_id).then(like => dispatch(receiveVideoLike(like)))
);

export const deleteVideoLike = videoId => dispatch => (
  LikeApiUtil.deleteVideoLike(videoId).then(like => dispatch(removeVideoLike(like)))
);

export const createCommentLike = (like, videoId, commentId) => dispatch => (
  LikeApiUtil.createCommentLike(like, videoId, commentId).then(like => dispatch(receiveCommentLike(like)))
);

export const deleteCommentLike = (videoId, commentId) => dispatch => (
  LikeApiUtil.deleteCommentLike(videoId, commentId).then(like => dispatch(removeCommentLike(like)))
);
