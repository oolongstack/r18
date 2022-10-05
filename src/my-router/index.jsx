import React from "react";
// import {
//   BrowserRouter,
//   HashRouter,
//   Routes,
//   Route,
//   Link,
//   Navigate,
//   useRoutes,
// } from "react-router-dom";
import { Routes, Route } from "./core/react-router";
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";

import UserAdd from "./UserAdd";
import UserList from "./UserList";

import routes from "./routes";
function Index() {
  return (
    <div>
      <header>
        {/* <Link to="/">home</Link>
        <br />
        <Link to={"/user"}>user</Link>
        <br />
        <Link to={"/profile"}>profile</Link> */}
      </header>
      <br />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}>
          {/* <Route path="/user/add" element={<UserAdd />}></Route>
          <Route path="/user/list" element={<UserList />}></Route> */}
        </Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
      {/* {useRoutes(routes)} */}
    </div>
  );
}

export default Index;
