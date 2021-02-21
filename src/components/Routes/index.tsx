import CaptureDni from '@Screens/CaptureDni';
import Home from '@Screens/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/capture-dni" component={CaptureDni} />
      <Route component={Home} />
    </Switch>
  );
};

export default Routes;
