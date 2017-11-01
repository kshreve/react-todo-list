import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from '../../redux/ducks/todo';

import List from './List';

export default connect((state) => ({
        todos: state.todo.todos
    }),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
    })
)(List);
