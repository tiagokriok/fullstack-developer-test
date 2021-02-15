import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateProduct from '../pages/CreateProduct';
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/product/:id" exact component={Product} />
    <Route path="/create" exact component={CreateProduct} />
  </Switch>
);

export default Routes;
