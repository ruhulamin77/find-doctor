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
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Doctors from './components/Doctors/Doctors';
import Register from './pages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivetRoute path="/booking/:doctorId">
            <Booking></Booking>
          </PrivetRoute>
          <Route path="/about">

          </Route>
          <Route path="/contact">

          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
