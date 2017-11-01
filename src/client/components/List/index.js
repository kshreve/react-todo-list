import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTodos } from '../../redux/ducks/todo';

import List from './List';

export default connect((state) => ({
        todos: state.todo.todos
    }),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, { getTodos }), dispatch)
    })
)(List);
