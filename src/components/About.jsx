import React, { PureComponent } from "react";
// import { connect } from "react-redux";
import { connect } from "../react-redux";
import { getPostsList } from "../store/about/actionCreators";

class About extends PureComponent {
  state = {
    name: "cjl",
  };
  render() {
    return (
      <div>
        name:{this.state.name}
        <br />
        <div>
          list:
          {this.props.list.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
        <button onClick={() => this.props.getPostsList()}>getList</button>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.about.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsList() {
      dispatch(getPostsList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
