import { bindActionCreators } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import { updateTodo, deleteTodo } from '../../redux/ducks/todo';

import Todo from './Todo';

const validate = values => {
    const errors = {};

    if ( !values.text ) {
        errors.text = 'Required';
    }

    if ( !values.priority ) {
        errors.priority = 'Required';
    } else if ( values.priority && isNaN(Number(values.priority)) ) {
        errors.priority = 'Priority must be a number';
    }

    return errors;
};

export default reduxForm({
    validate,
    enableReinitialize: true,
})(connect((state, props) => ({
    values: getFormValues(props.form)(state)
}), (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, { updateTodo, deleteTodo }), dispatch)
}))(Todo));
