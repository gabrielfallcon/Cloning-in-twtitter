import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProfileUser from '../pages/ProfileUser';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile"  component={ProfileUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;