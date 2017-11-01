import { connect } from 'react-redux';

import TodoList from './TodoList';

export default connect((state) => ({
        todos:     state.todo.todos,
        isLoading: state.todo.isLoading,
    }),
    (dispatch) => ({})
)(TodoList);
