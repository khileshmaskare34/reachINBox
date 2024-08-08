// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Onebox from './components/OneBox';
import Login from './components/Login';


const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Switch>
        <Route path="/google-login" component={Onebox} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
    </BrowserRouter>
  );
};

export default App;
