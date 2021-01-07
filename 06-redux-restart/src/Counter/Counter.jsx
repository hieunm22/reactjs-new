import React from 'react';
import './Counter.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
  }

  increase(e) {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease(e) {
    this.setState({ counter: this.state.counter - 1 })
  }

  reset(e) {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div className="container counter flex">
        <div className="actions">
          <button 
            className="btn" 
            onClick={this.increase}
          >
            <i className="fa fa-arrow-up"></i>
            Increase
          </button>
          <br />
          <button 
            className="btn" 
            onClick={this.decrease}
          >
            <i className="fa fa-arrow-down"></i>
            Decrease
          </button>
          <br />
          <button 
            className="btn" 
            onClick={this.reset}
            title="Reset counter to zero"
            disabled={this.state.counter === 0}
          >
            <i className="fa fa-undo"></i>
            Reset
          </button>
        </div>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}