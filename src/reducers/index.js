import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriesReducer';

export default combineReducers({
    movieReducer,
    favoriteReducer
})