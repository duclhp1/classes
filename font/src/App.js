import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./container/Login";
import ListClass from "./container/ListClass";
import ClassInfo from "./container/ClassInfo";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/class">
                  <ClassInfo />
              </Route>
              <Route path="/">
                  <ListClass />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
