import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import People from "./Pages/People";
import Person from "./Pages/Person";
import Error from "./Pages/Error";
// navbar
import NavBar from "./Pages/NavBar";

const ReactRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:name" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
