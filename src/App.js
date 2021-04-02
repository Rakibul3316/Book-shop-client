import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders'
import Admin from './Components/Admin/Admin'
import ManageBook from './Components/ManageBook/ManageBook';
import NotFound from './Components/NotFound/NotFound';
import CheckOut from './Components/CheckOut/CheckOut';
import GoogleSignIn from './Components/GoogleSignIn/GoogleSignIn';
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import { createContext } from 'react';
import { useState } from 'react';

export const BookCotext = createContext();


function App() {

  const [book, setBook] = useState([]);
  const [loogedIdUser, setLoggedInUser] = useState({})

  return (
    <BookCotext.Provider value={{ value: [loogedIdUser, setLoggedInUser], value2: [book, setBook] }}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageBook">
            <ManageBook />
          </Route>
          <Route path="/login">
            <GoogleSignIn />
          </Route>
          <PrivateRoute path="/checkOut/:bookId">
            <CheckOut />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </BookCotext.Provider>
  );
}

export default App;
