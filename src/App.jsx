import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
