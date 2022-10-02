import React, { PureComponent, Component } from "react";
class Message extends PureComponent {
  render() {
    console.log("message render");
    return <div>{this.props.message}</div>;
  }
}

export default class StateMain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "哈哈",
    };
  }
  increment = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("------", this.state.count);
      }
    );

    // this.setState((state, props) => {
    //   console.log("preState: ", state, "preProps: ", props);
    //   return {
    //     count: state.count + 1,
    //   };
    // });
  };
  render() {
    console.log("StateMain render");
    return (
      <div style={{ fontSize: "20px" }}>
        count:{this.state.count}
        <button onClick={() => this.increment()}>+x</button>
        <Message message={this.state.message}></Message>
      </div>
    );
  }
}
