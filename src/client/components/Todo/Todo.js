import React, { Component } from 'react';

import Input from '../Input/Input';

import './Todo.css';
import garbage from '../../assets/garbage.svg';

class Todo extends Component {
    deleteTodo() {
        const { actions: { deleteTodo }, item } = this.props;
        return deleteTodo(item);
    }

    submitForm(values) {
        const { actions: { updateTodo } } = this.props;

        return updateTodo(values);
    }

    render() {
        const { editable, values: { text, priority }, handleSubmit } = this.props;

        let content = <li className="todo-item" onBlur={() => setTimeout(handleSubmit(this.submitForm.bind(this)))}>
            <Input type="text" name="text"/>
            <Input type="number" name="priority"/>

            {editable && <img src={garbage} className="icon" alt="garbage" onClick={this.deleteTodo.bind(this)}/>}
        </li>;

        if ( !editable ) {
            content = <li className="todo-item">
                <span>{text}</span>
                <span>{priority}</span>
            </li>;
        }

        return (
            content
        );
    }
}

Todo.defaultProps = {
    values:   {
        text:     '',
        priority: null,
    },
    editable: false,
};

export default Todo;
