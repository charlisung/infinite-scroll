import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Result from "./pages/Result";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Result} />
          {/* <Route path="/results" render={() => <Result />} /> */}
          <Route path="/posts/:id" component={Detail} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
