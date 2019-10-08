import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionErrorsReducer = (oldState = {}, action) =>{
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {errors: []});
    case RECEIVE_SESSION_ERRORS:
      return merge({}, oldState, {errors: action.errors});
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;