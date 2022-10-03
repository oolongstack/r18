import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  addNumber,
  subNumber,
  fetchPostsListAction,
} from "../toolkit-store/features/home";
// import { connect } from "react-redux";
class HomeClass extends PureComponent {
  render() {
    const { count, list, addNumber, subNumber } = this.props;
    return (
      <div>
        count:{count}
        <br />
        {list.map((item) => {
          return <div key={item}>{item}</div>;
        })}
        <button onClick={() => addNumber(10)}>+10</button>
        <br />
        <button onClick={() => subNumber(9)}>-9</button>
        <br />
        <button onClick={() => fetchPostsListAction()}>getList</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.home.count,
    list: state.home.list,
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
