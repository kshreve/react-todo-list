import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './App.css';

import TodoList from '../TodoList';

class App extends Component {
    componentDidMount() {
        this.props.actions.getTodos();
    }

    addTodo() {
        return this.props.actions.addTodo();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to WayUp Code test</h1>
                </header>
                <div className="main">
                    <TodoList editable={true}/>
                    <button onClick={this.addTodo.bind(this)}> Add new TODO +</button>
                    <hr/>
                    <TodoList editable={false}/>
                </div>
                <div className="footer"/>
            </div>
        );
    }
}

export default App;
