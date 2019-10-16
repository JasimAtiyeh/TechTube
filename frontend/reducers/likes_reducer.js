// import {
//   RECEIVE_LIKE,
//   REMOVE_LIKE
// } from '../actions/like_actions';
// import merge from 'lodash/merge';

// const LikesReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   let likable_type = action.like.likable_type
//   switch (action.type) {
//     case RECEIVE_LIKE:
//       if (likable_type === 'video'){
//         return merge({}, oldState, {'liked_videos': [action.like.id]});
//       } else {
//         return merge({}, oldState, {'liked_comments': [action.like.id]});
//       }
//     case REMOVE_LIKE:
//       let newState = merge({}, oldState);
//       delete newState[action.likeId];
//       return newState;
//     default:
//       return oldState;
//   }
// };

// export default LikesReducer;