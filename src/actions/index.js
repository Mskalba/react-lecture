import * as types from './types';
import axios from 'axios';

export const addMenuElement = text => ({
    type: types.ADD_MENU_ELEMENT,
    text
});

export const removeMenuElement = () => ({
    type: types.REMOVE_MENU_ELEMENT
});

export const fetchTodosSuccess = (data) => ({
    type: types.FETCH_TODOS_SUCCESS,
    data
});

export const fetchTodosFailure = (error) => ({
    type: types.FETCH_TODOS_FAILURE,
    error
});

export const addTodoSuccess = (message) => ({
    type: types.ADD_TODO_SUCCESS,
    message
});

export function fetchTodos() {
    return dispatch =>
        axios.get('http://195.181.210.249:3000/todo/')
            .then(response => response.data)
            .then(data => {
                dispatch(fetchTodosSuccess(data));
                return data;
            })
            .catch(error => dispatch(fetchTodosFailure(error)))
}

export function addTodo(body) {
    return dispatch =>
        axios.post('http://195.181.210.249:3000/todo/', body)
            .then(() => {
                dispatch(addTodoSuccess('Todo Added'));
                dispatch(fetchTodos());
            })
            .catch(error => addTodoSuccess(error))
}