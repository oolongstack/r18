// import About from "./components/About";
// import HomeClass from "./components/HomeClass";
// import StateMain from "./setState/StateMain";
import { Routes, Route, NavLink, Navigate, useRoutes } from "react-router-dom";
import Home from "./router-views/Home";
import Profile from "./router-views/Profile";
import Login from "./router-views/Login";
import Order from "./router-views/Order";
import NotFound from "./router-views/NotFound";
import HomeRecommend from "./router-views/HomeRecommend";
import HomeRanking from "./router-views/HomeRanking";
import Detail from "./router-views/Detail";

import { withRouter } from "./router-views/withRouter";
import routes from "./router";

import Index from "./my-router";
function App() {
  return (
    <div className="App">
      <header>
        {/* <NavLink
          to={"/home"}
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          home
        </NavLink>
        <NavLink
          to={"/profile"}
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          profile
        </NavLink> */}
        {/* <NavLink to={"/home"}>home</NavLink>
        <NavLink to={"/profile"}>profile</NavLink>
        <NavLink to={"/login"}>login</NavLink>
        <span onClick={() => this.props.router.navigate("/order")}>订单</span>
        <NavLink to="/detail/100?name=cjl&age=20">detail</NavLink> */}
      </header>
      {/* <br /> */}
      {/* <HomeClass /> */}
      {/* <br /> */}
      {/* <About /> */}
      {/* <StateMain></StateMain> */}
      {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />}></Route>
            <Route path="/home/ranking" element={<HomeRanking />}></Route>
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      {/* {useRoutes(routes)} */}
      <Index />
    </div>
  );
}

export default App;
