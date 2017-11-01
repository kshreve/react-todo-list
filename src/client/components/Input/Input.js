import React, { Component } from 'react';
import { Field } from 'redux-form';

import './Input.css';

class Input extends Component {
    render() {
        return (
            <Field component="input" {...this.props}/>
        );
    }
}

export default Input;
