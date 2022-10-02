import React, { PureComponent } from "react";
import store from "../store";
import { incrementAction } from "../store/actionCreators";

// import { connect } from "react-redux";
export default class HomeClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().count,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        count:{count}
        <button onClick={() => store.dispatch(incrementAction(10))}>+10</button>
      </div>
    );
  }
}
