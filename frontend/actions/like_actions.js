import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_VIDEO_LIKE = 'RECEIVE_VIDEO_LIKE';
export const REMOVE_VIDEO_LIKE = 'REMOVE_VIDEO_LIKE';

const receiveVideoLike = response => ({
  type: RECEIVE_VIDEO_LIKE,
  response
});

const removeVideoLike = response => ({
  type: REMOVE_VIDEO_LIKE,
  videoId: response.video_id
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const createVideoLike = (like, video_id) => dispatch => (
  LikeApiUtil.createVideoLike(like, video_id).then(like => dispatch(receiveVideoLike(like)))
);

export const deleteVideoLike = videoId => dispatch => (
  LikeApiUtil.deleteVideoLike(videoId).then(like => dispatch(removeVideoLike(like)))
);

export const createLike = like => dispatch => (
  LikeApiUtil.createCommentLike(like).then(like => dispatch(receiveLike(like)))
);

export const deleteLike = commentId => dispatch => (
  LikeApiUtil.deleteCommentLike(commentId).then(commentId => dispatch(removeLike(commentId)))
);
