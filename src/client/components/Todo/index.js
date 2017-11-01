import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editTodo, updateTodo, deleteTodo } from '../../redux/ducks/todo';

import Todo from './Todo';

export default connect((state) => ({}),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, { editTodo, updateTodo, deleteTodo }), dispatch)
    })
)(Todo);
