import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    setActiveTodo(item) {
        return this.props.actions.editTodo(item);
    }

    render() {
        const { item } = this.props;
        const { text, priority } = item;

        return (
            <div className="todo-item" onClick={this.setActiveTodo.bind(this, item)}>
                <span>{text}</span>
                <span>{priority}</span>
            </div>
        );
    }
}

export default Todo;
