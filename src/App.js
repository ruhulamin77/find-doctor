import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">

        </Route>
        <Route path="/about">

        </Route>
        <Route path="/contact">

        </Route>
        <Route path="/login">

        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
