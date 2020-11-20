import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
import Details from "./components/Details";
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Home /> 
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}
