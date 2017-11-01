import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './App.css';

import List from '../List';

class App extends Component {
    addTodo() {
        return this.props.actions.addTodo();
    }

    addLowTodo() {
        return this.props.actions.addTodo({ text: 'text', priority: 10, });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to WayUp Code test</h1>
                </header>
                <div className="main">
                    <div onClick={this.addTodo.bind(this)}> Add new TODO +</div>
                    <div onClick={this.addLowTodo.bind(this)}> Add low TODO +</div>
                    <List/>
                </div>
                <div className="footer"/>
            </div>
        );
    }
}

export default App;
