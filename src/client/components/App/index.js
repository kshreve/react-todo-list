import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addTodo, getTodos } from '../../redux/ducks/todo';

import App from './App';

export default connect((state) => ({}),
    (dispatch) => ({
        actions: bindActionCreators(Object.assign({}, { addTodo, getTodos }), dispatch)
    })
)(App);
