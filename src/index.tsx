/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import 'core-js';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import 'highlight-for-react/lib/highlight/styles/atom-one-light.css';
import Layout from './layout/layout';
import MenuConfig from './layout/menu-config';
import { BasePageComponent } from './utils';
import { PagesComponent } from './utils/pages';
import Simulator from './utils/simulator';
import Home from './pages/home/index';
import Download from './pages/download';
import 'union-design-h5/lib/index.css';

const BaseComponentHC: React.FC<RouteComponentProps<any>> = (BasePageComponent1) => (props) => {
  const { match } = props;
  const { name, demo } = match?.params;
  return <BasePageComponent1 name={name} demo={demo} />;
};

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/develop/simulator/:name/:demo" component={BaseComponentHC(Simulator)} />
      <Layout menus={MenuConfig}>
        <Route path="/develop/components/:name" component={BaseComponentHC(BasePageComponent)} />
        <Route path="/design/:parent/:child" component={PagesComponent} />

        <Route path="/download" exact component={Download} />
        <Route path="/" exact component={Home} />
      </Layout>
    </Switch>

    {/* 用于模拟代码 */}
  </Router>,
  document.getElementById('root'),
);
