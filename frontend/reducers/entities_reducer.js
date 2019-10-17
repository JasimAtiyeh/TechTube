import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import VideosReducer from './videos_reducer';
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  videos: VideosReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;