import update from 'react-addons-update';
import * as types from '../action/ActionTypes';

const initialState = {
    todos: []
};

export default function manager(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCE:
            return {
                ...state,
                todos: update(state.todos, {$push: [{content: action.todo}]})
            };
        case types.REMOVAL:
            return {
                ...state,
                todos: update(state.todos, {$splice: [[action.id, 1]]})
            };
        default:
            return state;
    }
}