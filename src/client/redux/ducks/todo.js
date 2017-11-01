const ADD_TODO = 'ADD_TODO';

const initialState = {
    todos: []
};

export default (state = initialState, action = null) => {
    switch( action.type ) {
        default:
            return state;
    }
};

export const addTodo = ({ text }) => ({
    type: ADD_TODO,
    todo: {
        text
    }
});
