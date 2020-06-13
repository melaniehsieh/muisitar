import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./components/Home";
import BeginnerSong from "./components/BeginnerSong";
import Challenges from "./components/Challenges";
import Cmajor from "./components/Cmajor";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beginners" component={BeginnerSong} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/c" component={Cmajor} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
