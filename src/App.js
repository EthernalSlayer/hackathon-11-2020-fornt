import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
import Details from "./components/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route path="/score" component={Score} />
          <Route path="/details" component={Details} />
          <Route path="/home" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
