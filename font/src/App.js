import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./container/Login";
import ListClass from "./container/ListClass";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/">
                  <ListClass />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
