import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        const { text, priority } = this.props;

        return (
            <div>
                <span>{text}</span> - <span>{priority}</span>
            </div>
        );
    }
}

export default Todo;
