import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
import Details from "./components/Details";
import Header from './components/Header';
import Footer from './components/Footer';
import Entry from "./components/Entry";

export default function App() {
  return (
    <Router>
      <div>
      <Header />
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/home">
            <Home /> 
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}
