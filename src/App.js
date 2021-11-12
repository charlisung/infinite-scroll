import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Result from "./components/Result";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/posts/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
