import React, { Component } from 'react';

import './App.css';

import Buttons from './components/Buttons'
import Result from './components/Result'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {


    state = {
        result: ""
    }


onClick = button => {
console.log(button)
    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }
    
    else {
     
        this.setState({
            result: this.state.result + button
        }) }
    
};


calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

render() {
    return (
        <div>
           <header className="App-header">
            <div className="calculator-body">
                <h2> Calculator</h2>
                <Result result={this.state.result}/>
                <Buttons onClick={this.onClick}/>
            </div>
            </header>
        </div>
  
    );
  }
}

export default App;
