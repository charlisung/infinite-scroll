import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Link to="/">
          <h1 className="title">Infinite Scrolling</h1>
        </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
