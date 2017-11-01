import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        const { text, priority } = this.props;
        
        return (
            <div>
                <div>{text}</div>
                <div>{priority}</div>
            </div>
        );
    }
}

export default Todo;
