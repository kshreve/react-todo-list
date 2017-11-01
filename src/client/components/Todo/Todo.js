import React, { Component } from 'react';

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

    render() {
        const { item: { text, priority }, editable } = this.props;

        return (
            <li className="todo-item">
                <span>{text}</span>
                <span>{priority}</span>

                {editable && <img src={pencil} className="icon" alt="edit" onClick={this.setActiveTodo.bind(this)}/>}
                {editable && <img src={garbage} className="icon" alt="garbage" onClick={this.deleteTodo.bind(this)}/>}
            </li>
        );
    }
}

export default Todo;
