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

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

const initialState = {
    isLoading: false,
    hasError:  false,
    todos:     [],
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
                isLoading: false,
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
                hasError: false,
                todos,
            });
        case ADD_TODO_SUCCESS:
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            let newTodos = [...state.todos];

            if ( index > -1 ) {
                newTodos[index] = action.payload;
            }

            return Object.assign({}, state, {
                hasError: false,
                todos:    sortTodos(newTodos),
            });
        case ADD_TODO_FAILURE:
            return Object.assign({}, state, {
                hasError: true,
            });
        case UPDATE_TODO_REQUEST: {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            let newTodos = [...state.todos];

            if ( index > -1 ) {
                newTodos[index] = action.payload;
            }

            return Object.assign({}, state, {
                hasError: false,
                todos:    sortTodos(newTodos),
            });
        }
        case UPDATE_TODO_FAILURE:
            return Object.assign({}, initialState, {
                isLoading: false,
                hasError:  true,
            });
        case DELETE_TODO_REQUEST: {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            let newTodos = [...state.todos];

            if ( index > -1 ) {
                newTodos = [
                    ...state.todos.slice(0, index),
                    ...state.todos.slice(index + 1),
                ];
            }

            return Object.assign({}, initialState, {
                hasError: false,
                todos:    sortTodos(newTodos),
            });
        }
        case DELETE_TODO_FAILURE: {
            // if it fails, add it back to the list of todos
            return Object.assign({}, initialState, {
                isLoading: false,
                hasError:  true,
                todos:     sortTodos([...state.todos, action.payload]),
            });
        }
        default:
            return state;
    }
};

export const getTodos = () => ({
    [CALL_API]: {
        endpoint: TODOS,
        method:   'GET',
        types:    [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE],
    }
});

export const addTodo = (todo = { id: uuid(), text: '', priority: Math.MAX_SAFE_INTEGER, }) => ({
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

export const updateTodo = (todo) => ({
    [CALL_API]: {
        endpoint: TODO(todo._id.$oid),
        method:   'PUT',
        headers:  {
            'Content-Type': 'application/json'
        },
        body:     JSON.stringify(todo),
        types:    [
            {
                type:    UPDATE_TODO_REQUEST,
                payload: todo
            },
            UPDATE_TODO_SUCCESS,
            UPDATE_TODO_FAILURE,
        ]
    }
});

export const deleteTodo = (todo) => ({
    [CALL_API]: {
        endpoint: TODO(todo._id.$oid),
        method:   'DELETE',
        headers:  {
            'Content-Type': 'application/json'
        },
        types:    [
            {
                type:    DELETE_TODO_REQUEST,
                payload: todo
            },
            DELETE_TODO_SUCCESS,
            {
                type:    DELETE_TODO_FAILURE,
                payload: todo
            },
        ]
    }
});
