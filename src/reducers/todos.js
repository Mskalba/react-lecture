import {FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS} from './../actions/types';

const initialState = {
    items: [],
    error: '',
    message: '',
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            return {
                items: action.data
            };
        case FETCH_TODOS_FAILURE:
            return {
                error: action.error
            };
        case ADD_TODO_SUCCESS:
            return {
                items: state.items,
                message: action.message
            }
        default:
            return state;
    }
}

export default todos;