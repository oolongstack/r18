import React from "react";
const NavigationContext = React.createContext();
const LocationContext = React.createContext();
const RouteContext = React.createContext();

export function Route() {}
export function Router({ children, location, navigator }) {
  const navigationContext = { navigator }; // 就是history对象
  return (
    <NavigationContext.Provider value={navigationContext}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}

export function Routes({ children }) {
  return useRoutes(createRoutesFromChildren(children));
}
function createRoutesFromChildren(children) {
  const routes = [];
  // 拿到每一个Route循环
  React.Children.forEach(children, (element) => {
    let route = {
      path: element.props.path,
      element: element.props.element,
    };
    routes.push(route);
  });

  return routes;
}

function useRoutes(routes) {
  // 获取当前路径
  const location = useLocation();
  // 当前的pathname
  const pathname = location.pathname;

  for (let i = 0; i < routes.length; i++) {
    const { path, element } = routes[i];
    const match = matchPath(path, pathname);
    if (match) {
      return element;
    }
  }
  return null;
}
function useLocation() {
  return React.useContext(LocationContext).location;
}

function matchPath(path, pathname) {
  // 根据路径将path编译成正则
  const matcher = compilePath(path);
  return pathname.match(matcher);
}
function compilePath(path) {
  let regexpSource = "^" + path;
  regexpSource += "$";
  let matcher = new RegExp(regexpSource);
  return matcher;
}
