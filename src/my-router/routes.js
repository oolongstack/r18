import Home from "./Home";
import User from "./User";
import Profile from "./Profile";

import UserAdd from "./UserAdd";
import UserList from "./UserList";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "/user/add",
        element: <UserAdd />,
      },
      {
        path: "/user/list",
        element: <UserList />,
      },
    ],
  },
  {
    path: "/peofile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <Home />,
  },
];

export default routes;
