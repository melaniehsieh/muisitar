import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./components/Home";
import BeginnerSong from "./components/BeginnerSong";
import Challenges from "./components/Challenges";
import Chords from "./components/Chords";
import Adele from "./components/Adele";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beginners" component={BeginnerSong} />
          <Route path="/challenges" component={Challenges} />
          <Route path="/c-major" component={Chords} />
          <Route path="/rid" component={Adele} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
