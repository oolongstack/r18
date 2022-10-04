import React, { PureComponent } from "react";
import { Navigate } from "react-router-dom";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        Login page
        {!isLogin ? (
          <button onClick={() => this.setState({ isLogin: true })}>登录</button>
        ) : (
          <Navigate to="/home" />
        )}
      </div>
    );
  }
}
