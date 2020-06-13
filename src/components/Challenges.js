import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import rid from "../image/rid.jpg";
import perfect from "../image/perfect.jpg";
import locked from "../image/lock.png";
import "./BeginnerSong.css";

export default class Challenges extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={rid} />
            <Card.Body className="card_body">
              <Card.Title className="title">Rolling in the Deep</Card.Title>
              <Card.Text>Adele</Card.Text>
              <Link to="/rid">
                <Button variant="warning">Challenge</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={perfect} />
            <Card.Body className="card_body">
              <Card.Title className="title">Perfect</Card.Title>
              <Card.Text>Ed Sheeran</Card.Text>
              <Link to="/perfect">
                <Button variant="warning">Challenge</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={locked} />
            <Card.Body className="card_body">
              <Card.Title className="title">Best Part of Me</Card.Title>
              <Card.Text>Ed Sheeran</Card.Text>
              <Button disabled={true} variant="dark">
                Locked
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={locked} />
            <Card.Body className="card_body">
              <Card.Title className="title">Dancing with a Stranger</Card.Title>
              <Card.Text>Sam Smith</Card.Text>
              <Button disabled={true} variant="dark">
                Locked
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
