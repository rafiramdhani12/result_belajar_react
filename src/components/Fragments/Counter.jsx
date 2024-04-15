// contoh statefull

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    this.setState({counter: 10});
    console.log("componentDidmount");
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.counter}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({counter: this.state.counter + 1})}>
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
