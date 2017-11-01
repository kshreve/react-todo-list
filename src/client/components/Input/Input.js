import React, { Component } from 'react';
import { Field } from 'redux-form';

import './Input.css';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {
                touched && (
                    (error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>)
                )
            }
        </div>
    </div>
);

class Input extends Component {
    render() {
        return (
            <Field {...this.props} component={renderField}/>
        );
    }
}

export default Input;
