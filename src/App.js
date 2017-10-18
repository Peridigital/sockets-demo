import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test'

import {test} from './sockets'

class App extends Component {
  state = {
    userInput: ''
  }

  submit = () => {
    test()
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>little q</h1>
        </header>
        <div className="content">
          <div className="request-container">
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
              <h1>test</h1>
          </div>
          <div className="side-panel">
            <div className="question-box">
                <input value={this.state.userInput}onChange={(e)=>{
                  this.setState({userInput: e.target.value})
                }} />
                <button onClick={this.submit}>Submite</button>
            </div>
            <div className="name-container">
              <h1>test</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
