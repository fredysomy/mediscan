import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Profile from "./pages/Profile";
import Reception from "./pages/Reception";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/doctor">
            <Doctor />
          </Route>
          <Route path="/pharmacy">
            <Pharmacy />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/reception">
            <Reception />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
