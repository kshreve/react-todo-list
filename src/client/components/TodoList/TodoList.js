import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../Todo';

class List extends Component {
    renderItem(item) {
        const { editable } = this.props;
        const form = `todo-form-${item.id}`;

        return <Todo key={item.id} form={form} initialValues={item} editable={editable}/>;
    }

    render() {
        const { todos } = this.props;

        return (
            <ul className="list">
                <div className="list-header">
                    <span>Todo Text</span>
                    <span>priority</span>
                </div>
                {
                    todos && todos.map((item) => this.renderItem(item))
                }
            </ul>
        );
    }
}

export default List;
