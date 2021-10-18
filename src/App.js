import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/courses">

        </Route>
        <Route exact path="/about">

        </Route>
        <Route exact path="/contact">

        </Route>
        <Route path="/login">

        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
