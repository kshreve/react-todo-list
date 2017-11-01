import { connect } from 'react-redux';

import List from './List';

export default connect((state) => ({
        todos: state.todo.todos
    }),
    (dispatch) => ({})
)(List);
