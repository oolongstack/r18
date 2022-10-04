import Home from "../router-views/Home";
import Profile from "../router-views/Profile";
import Login from "../router-views/Login";
import Order from "../router-views/Order";
import NotFound from "../router-views/NotFound";
import HomeRecommend from "../router-views/HomeRecommend";
import HomeRanking from "../router-views/HomeRanking";
import Detail from "../router-views/Detail";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend />,
      },
      {
        path: "/home/ranking",
        element: <HomeRanking />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
