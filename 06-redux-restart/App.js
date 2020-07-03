import React from 'react';
import './App.css';
import Home from "./Home";
import Counter from "./Counter";
import Control from "./Control";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/control" component={Control} />
    </Switch>
  </Router>
);

export default App