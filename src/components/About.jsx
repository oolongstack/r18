import React, { PureComponent } from "react";
// import { connect } from "react-redux";
import { connect } from "../react-redux";
import { getPostsList, addNumberAction } from "../store/about/actionCreators";

class About extends PureComponent {
  state = {
    name: "cjl",
  };
  render() {
    return (
      <div>
        name:{this.state.name}
        <br />
        count:{this.props.count}
        <div>
          list:
          {this.props.list.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        <button onClick={() => this.props.getPostsList()}>getList</button>
        <br />
        <button onClick={() => this.props.addNumber(20)}>+x</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.about.list,
    count: state.about.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsList() {
      dispatch(getPostsList());
    },
    addNumber(num) {
      dispatch(addNumberAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
