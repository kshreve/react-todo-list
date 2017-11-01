import uuid from 'uuid';
import { CALL_API } from 'redux-api-middleware';

import { TODOS, TODO } from '../constants';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const EDIT_TODO = 'EDIT_TODO';

const initialState = {
    isLoading:  false,
    hasError:   false,
    todos:      [],
    activeTodo: null,
};

const sortTodos = (todos) => todos.sort((a, b) => a.priority - b.priority);

export default (state = initialState, action = null) => {
    switch( action.type ) {
        case GET_TODOS_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
                hasError:  false,
            });
        case GET_TODOS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: true,
                hasError:  false,
                todos:     sortTodos(action.payload),
            });
        case GET_TODOS_FAILURE:
            return Object.assign({}, initialState, {
                isLoading: false,
                hasError:  true,
            });
        case ADD_TODO_REQUEST:
            let todos = sortTodos([...state.todos, action.payload]);

            return Object.assign({}, state, {
                isLoading: true,
                hasError:  false,
                todos
            });
        case ADD_TODO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                hasError:  false,
            });
        case ADD_TODO_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                hasError:  true,
            });
        case EDIT_TODO:
            return Object.assign({}, state, {
                activeTodo: action.todo
            });
        default:
            return state;
    }
};

export const getTodos = () => ({
    [CALL_API]: {
        endpoint: TODOS,
        method:   'GET',
        types:    [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE]
    }
});

export const addTodo = (todo = { id: uuid(), text: uuid(), priority: 0, }) => ({
    [CALL_API]: {
        endpoint: TODOS,
        method:   'POST',
        headers:  {
            'Content-Type': 'application/json'
        },
        body:     JSON.stringify(todo),
        types:    [
            {
                type:    ADD_TODO_REQUEST,
                payload: todo
            },
            ADD_TODO_SUCCESS,
            ADD_TODO_FAILURE,
        ]
    }
});

export const editTodo = (todo) => ({
    type: EDIT_TODO,
    todo,
});

export const updateTodo = (todo) => ({
    [CALL_API]: {
        endpoint: TODO(todo.id),
        method:   'PUT',
        headers:  {
            'Content-Type': 'application/json'
        },
        body:     JSON.stringify(todo),
        types:    [
            {
                type: UPDATE_TODO_REQUEST,
                todo
            },
            UPDATE_TODO_SUCCESS,
            UPDATE_TODO_FAILURE,
        ]
    }
});
