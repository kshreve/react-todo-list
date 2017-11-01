import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './App.css';

import List from '../List/List';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to WayUp Code test</h1>
                </header>
                <List/>
            </div>
        );
    }
}

export default App;
