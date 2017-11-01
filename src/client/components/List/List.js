import React, { Component } from 'react';
import './List.css';
import Todo from '../Todo/Todo';

class List extends Component {
    render() {
        const items = [1, 2, 3, 4, 5];

        return (
            <div>
                {
                    items && items.map((item, index) => <Todo key={index} item={item}/>)
                }
            </div>
        );
    }
}

export default List;
