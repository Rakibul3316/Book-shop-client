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
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/manageBook">
          <ManageBook />
        </Route>
        <Route path="/checkOut/:bookId">
          <CheckOut />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
