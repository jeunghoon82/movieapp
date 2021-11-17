import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css";

function App() {
  return (
    /*
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    */
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="Hello Every One"><h1>hello</h1></Route>
        <Route path="/movie/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;