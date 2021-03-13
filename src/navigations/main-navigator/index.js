import React from "react";
import { Route } from "react-router";
import Home from "pages/home";
import PlanetDetail from "pages/planet-detail";

const mainRoutes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    path: "/planet/:id",
    exact: true,
    component: <PlanetDetail />,
  },
];

function MainNavigator() {
  return (
    <>
      {mainRoutes.map((route, idx) => (
        <Route key={idx} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </>
  );
}

export default MainNavigator;
