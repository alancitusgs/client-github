import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Public from "./Routes/Public";
import Page404 from "./Pages/Page404";


function App() {
  return (
    <Router>
      <Switch>
      

        <Public path="/not-found" exact component={Page404} />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
