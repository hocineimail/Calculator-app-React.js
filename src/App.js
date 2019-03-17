import React, { Component } from 'react';

import './App.css';

import Buttons from './components/Buttons'

import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {


render() {
    return (
        <div>
           <header className="App-header">
            <div className="calculator-body">
                <h2> Calculator</h2>
                <Buttons />
            </div>
            </header>
        </div>
  
    );
  }
}

export default App;
