import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
import Details from "./components/Details";


export default function App() {
  return (
    <>
    <div className="bg"></div>
    <div className="lightning flashit"></div>
    
    
    <div id="logo">
    <h1>VOLVA</h1>
    </div>
    </>
  );
}
