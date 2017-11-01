import uuid from 'uuid';
import { CALL_API } from 'redux-api-middleware';

import { TODOS } from '../constants';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

const initialState = {
    isLoading: false,
    hasError:  false,
    todos:     []
};

export default (state = initialState, action = null) => {
    switch( action.type ) {
        case GET_TODOS_REQUEST:
            return Object.assign({}, {
                isLoading: true,
                hasError:  false,
            });
        case GET_TODOS_SUCCESS:
            return Object.assign({}, {
                isLoading: true,
                hasError:  false,
                todos:     action.payload
            });
        case GET_TODOS_FAILURE:
            return Object.assign({}, initialState, {
                isLoading: false,
                hasError:  true,
            });
        case ADD_TODO_REQUEST:
            return Object.assign({}, {
                isLoading: true,
                hasError:  false,
                todos:     [...state.todos, action.todo],
            });
        case ADD_TODO_SUCCESS:
            return Object.assign({}, {
                isLoading: false,
                hasError:  false,
            });
        case ADD_TODO_FAILURE:
            return Object.assign({}, {
                isLoading: false,
                hasError:  true,
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

export const addTodo = (todo = { id: uuid(), text: '', priority: '', }) => ({
    [CALL_API]: {
        endpoint: TODOS,
        method:   'POST',
        headers:  {
            'Content-Type': 'application/json'
        },
        body:     JSON.stringify(todo),
        types:    [ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE]
    }
});
