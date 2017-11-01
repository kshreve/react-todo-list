import React, { Component } from 'react';
import './List.css';
import Todo from '../Todo/Todo';

class List extends Component {
    componentDidMount() {
        this.props.actions.getTodos();
    }

    render() {
        const { todos } = this.props;

        return (
            <div>
                {
                    todos && todos.map((item) => <Todo key={item.id} {...item}/>)
                }
            </div>
        );
    }
}

export default List;
