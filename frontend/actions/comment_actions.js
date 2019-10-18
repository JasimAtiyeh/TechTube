import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = response => ({
  type: RECEIVE_ALL_COMMENTS,
  comments: response.comments_response.comments,
  videoId: response.comments_response.video_id
  });

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId, videoId) => ({
  type: REMOVE_COMMENT,
  commentId,
  videoId
});

export const fetchComments = videoId => dispatch => (
  CommentApiUtil.fetchComments(videoId).then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchComment = (commentId, videoId) => dispatch => (
  CommentApiUtil.fetchComment(commentId, videoId).then(comment => dispatch(receiveComment(comment)))
);

export const createComment = (comment, videoId) => dispatch => (
  CommentApiUtil.createComment(comment, videoId).then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = (comment, videoId) => dispatch => (
  CommentApiUtil.updateComment(comment, videoId).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId, videoId) => dispatch => (
  CommentApiUtil.deleteComment(commentId, videoId).then(comment => dispatch(removeComment(comment.id, comment.video_id)))
);