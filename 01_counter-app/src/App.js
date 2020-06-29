import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    history: [0],
  }

  direction = 1

  setCounter = () => {
    const history = this.state.history
    const last = history[history.length - 1]
    const isIncrease = last === 10 && this.direction === 1
    const isDecrease = last === 0 && this.direction === -1
    if (isIncrease) {
      this.direction = -1
      return this.setState({ history: history.filter((e, i) => i !== history.length - 1) })
    } 
    if (isDecrease) {
      this.direction = 1
      return this.setState({ history: [...history, last + 1] })
    }
    if (this.direction === 1) {
      return this.setState({ history: [...history, last + 1] })      
    } 
    return this.setState({ history: history.filter((e, i) => i !== history.length - 1) })

  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.history.toString()}</h2>
        <hr />
        <button onClick={this.setCounter}>Click to set counter</button>
      </div>
    );
  }
}

export default App;
