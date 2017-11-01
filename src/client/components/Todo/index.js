import { bindActionCreators } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import { updateTodo, deleteTodo } from '../../redux/ducks/todo';

import Todo from './Todo';

export default reduxForm()(connect((state, props) => ({
    values: getFormValues(props.form)(state)
}), (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, { updateTodo, deleteTodo }), dispatch)
}))(Todo));
