import React, { PureComponent } from "react";
import { Outlet, Link } from "react-router-dom";
export default class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        <Link to="/home/recommend">recommend</Link>
        <Link to="/home/ranking">ranking</Link>
        <Outlet></Outlet>
      </div>
    );
  }
}
