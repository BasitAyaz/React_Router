import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../containers/about";
import DefaultScreen from "../containers/def";
import Home from "../containers/home";
import Services from "../containers/services";

export default function AppRoute() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services/:id" component={Services} />
          <Route path="**" component={DefaultScreen} />
        </Switch>
      </div>
    </Router>
  );
}
