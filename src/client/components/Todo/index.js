import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editTodo, updateTodo } from '../../redux/ducks/todo';

import Todo from './Todo';

export default connect((state) => ({}),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, { editTodo, updateTodo }), dispatch)
    })
)(Todo);
