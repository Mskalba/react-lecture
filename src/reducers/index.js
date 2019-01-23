import { combineReducers } from 'redux';
import menu from './menu';
import todos from './todos';

export default combineReducers({menu, todos});