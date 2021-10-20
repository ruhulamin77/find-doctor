
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Doctors from './components/Doctors/Doctors';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog/Blog';

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
            <About></About>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
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
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
