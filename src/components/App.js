import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "../history";
import "./styles/index.scss";
import Header from "./Header";
import DishCategories from "./DishCategories";

const App = () => {
  return (
    <>
      <section id='header'>
        <Header />
      </section>
      <section id='content'>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={DishCategories} />
            <Route
              path='*'
              exact
              component={() => (
                <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
              )}
            />
          </Switch>
        </Router>
      </section>
      <section id='footer'>
        <footer style={{ textAlign: "center" }}>@Resto</footer>
      </section>
    </>
  );
};

export default App;
