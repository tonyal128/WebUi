import fetchThemeData from './fetchThemeData';
import fetchTodoData from './fetchTodoData.js';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    todos: fetchTodoData,
    theme: fetchThemeData
});

export default rootReducers;