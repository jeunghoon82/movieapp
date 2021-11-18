import { BrowserRouter as Router, Route } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Switch로 감싸는 Route끼리의 전환은 화면이 전환된다.

import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      {/* </Switch> */}
  </Router>
  );
}

export default App;