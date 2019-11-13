import React from "react";
import { Route } from "react-router-dom";
import Routes from "./App-routes.constants";
import Navigation from './components/Navigation/Navigation';
import './styles.css';

const RenderRouteComponents = (routes) => {
  return routes.map((route, index) => {
    return <Route key={index} path={route.path} component={route.component} exact />
  });
}

export default () => (
  <div>
    <Navigation />
    <hr />
    {RenderRouteComponents(Routes)}
  </div>
);
