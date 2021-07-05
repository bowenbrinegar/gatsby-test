import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <h2>{count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Subtract</button>
      </React.Fragment>
    );
  }
}