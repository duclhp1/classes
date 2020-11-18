import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./container/Login";
import ListClass from "./container/ListClass";
import ClassInfo from "./container/ClassInfo";
import Analytics from "./container/Analytics";
import Setting from "./container/Setting";
import Students from "./container/Students";

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
              <Route path="/thongke">
                  <Analytics />
              </Route>
              <Route path="/caidat">
                  <Setting />
              </Route>
              <Route path="/students">
                  <Students />
              </Route>
              <Route path="/">
                  <ListClass />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
