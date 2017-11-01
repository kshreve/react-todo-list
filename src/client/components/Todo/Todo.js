import React, { Component } from 'react';

import Input from '../Input/Input';

import './Todo.css';
import garbage from '../../assets/garbage.svg';
import pencil from '../../assets/pencil.svg';

class Todo extends Component {
    setActiveTodo() {
        const { actions: { editTodo }, item } = this.props;

        return editTodo(item);
    }

    deleteTodo() {
        const { actions: { deleteTodo }, item } = this.props;
        return deleteTodo(item);
    }

    submitForm() {
        console.log('hi');
    }

    render() {
        const { editable, values: { text, priority } } = this.props;

        let content = <li className="todo-item" onBlur={this.submitForm.bind(this)}>
            <Input type="text" name="text"/>
            <Input type="number" name="priority"/>

            {editable && <img src={pencil} className="icon" alt="edit" onClick={this.setActiveTodo.bind(this)}/>}
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
