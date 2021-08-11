// import useResize from "use-resize";
import "./App.css";
import GymContainer from "./components/GymContainer";
import GymDetails from "./components/GymDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import "./styles/globals.scss";
// import MobileNavBar from "./components/MobileNavBar";

function App() {
  // const size = useResize();
  return (
    <Router>
      <div className="app-container">
        <div className="app-background" />
        {/* using resize - {size.width > 576 ? <NavBar /> : <MobileNavBar />} */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
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
