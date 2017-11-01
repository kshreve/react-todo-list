import React, { Component } from 'react';
import './List.css';
import Todo from '../Todo';

class List extends Component {
    componentDidMount() {
        this.props.actions.getTodos();
    }

    render() {
        const { todos } = this.props;

        return (
            <div className="list">
                {
                    todos && todos.map((item) => <Todo key={item.id} item={item}/>)
                }
            </div>
        );
    }
}

export default List;
