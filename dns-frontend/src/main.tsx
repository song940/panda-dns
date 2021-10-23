import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Route, Link
} from "react-router-dom";
import Loadable from "react-loadable";
import Header from './components/Header';

import './main.css';

const loading = () => <div />

const routes = [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loading,
      loader: () => import('./pages/index')
    })
  },
  {
    path: "/domain/:domain",
    component: Loadable({
      loading,
      loader: () => import('./pages/domain')
    })
  }
];

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const links = [
  { text: 'Home', href: "/" },
];

const App = () => {
  return (
    <Router>
      <Header title="Panda DNS" links={links} />
      <div className="content">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
