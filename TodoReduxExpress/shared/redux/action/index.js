import * as types from './ActionTypes';

export function produce(todo) {
    return {
        type: types.PRODUCE,
        todo,
    };
}

export function removal(id) {
    return {
        type: types.REMOVAL,
        id,
    };
}

export function retitle(title){
    return {
        type: types.RETITLE,
        title,
    };
}