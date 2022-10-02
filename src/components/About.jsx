import React, { PureComponent } from "react";
// import { connect } from "react-redux";
import { connect } from "../react-redux";
import { incrementAction } from "../store/actionCreators";

class About extends PureComponent {
  state = {
    name: "cjl",
  };
  render() {
    return (
      <div>
        count:{this.props.count}
        name:{this.state.name}
        <button onClick={() => this.props.increment()}>+90</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(incrementAction(90));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
