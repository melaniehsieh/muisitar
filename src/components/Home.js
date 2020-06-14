import React, { Component } from "react";
import "./Home.css";
import background from "../image/background.png";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <img src={background} alt="background logo" width="100%" />
        <p>
          A website that teaches you basic knowledge in guitar, and offer
          challenges to elevate your skills.
        </p>
      </div>
    );
  }
}

export default Home;
