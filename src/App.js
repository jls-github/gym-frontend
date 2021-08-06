import "./App.css";
import GymContainer from "./components/GymContainer";
import GymDetails from './components/GymDetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h2>Home Page</h2>
          </Route>
          <Route exact path="/gyms">
            <GymContainer />
          </Route>
          <Route path="/gyms/:id">
            <GymDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
