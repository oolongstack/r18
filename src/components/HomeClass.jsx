import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber, subNumber } from "../toolkit-store/features/home";
// import { connect } from "react-redux";
class HomeClass extends PureComponent {
  render() {
    const { count, addNumber, subNumber } = this.props;
    return (
      <div>
        count:{count}
        <br />
        <button onClick={() => addNumber(10)}>+10</button>
        <button onClick={() => subNumber(9)}>-9</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.home.count,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
  subNumber(num) {
    dispatch(subNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
