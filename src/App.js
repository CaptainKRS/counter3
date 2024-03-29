
import React, {Component} from 'react';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
    }
  }
  /*
    **** Methods live below the constructor and above the
    render method;

  */

  increment  = () => {
    this.setState ({
      count: this.state.count + 1,
    })
  }





  render() {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button">Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;
