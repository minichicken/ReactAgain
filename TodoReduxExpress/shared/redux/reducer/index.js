import { combineReducers } from 'redux';
import manager from './manager';
import title from './title';

const reducers = combineReducers({
    todos: manager,
    title: title
});

export default reducers;