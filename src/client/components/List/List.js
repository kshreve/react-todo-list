import React, { Component } from 'react';
import './List.css';
import Todo from '../Todo';

class List extends Component {
    render() {
        const { todos, editable } = this.props;

        return (
            <ul className="list">
                {
                    todos && todos.map((item) => <Todo key={item.id} item={item} editable={editable}/>)
                }
            </ul>
        );
    }
}

export default List;
