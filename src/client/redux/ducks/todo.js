import uuid from 'uuid';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

const initialState = {
    isLoading: false,
    hasError:  false,
    todos:     []
};

export default (state = initialState, action = null) => {
    switch( action.type ) {
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

export const addTodo = (todo = { id: uuid(), text: '', priority: '', }) => ({
    type: ADD_TODO_REQUEST,
    todo
});
