import React, { Component } from 'react'

export default class Result extends Component {
  render() {

         let {result} = this.props;
    return (
         <div className="result" style={{ width: '400px',height: '50px', backgroundColor: '#fff'}}>
         <p style={{color: 'black'}}>{result}</p>
         </div>
     
    )
  }
}
