import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  let newState;
  // let like_status;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, oldState, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    // case RECEIVE_COMMENT_LIKE:
    //   like_status = action.response.like ? 'like' : 'dislike';
    //   return merge({}, oldState, {
    //     [action.response.videoId]: {
    //       [action.response.likable_id]: {
    //         like_status: like_status
    //       }
    //     }
    //   });
    // case REMOVE_COMMENT_LIKE:
    //   newState = merge({}, oldState);
    //   delete newState[action.comment.videoId].comment.like_status;
    //   return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;