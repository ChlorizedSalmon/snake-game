import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/base.css';
import NotFound from './NotFound';
import Splash from './Splash';
import Single from './Single';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/single" component={Single} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
