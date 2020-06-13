import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import c from "../image/c.png";
import f from "../image/f.png";
import g from "../image/g.png";
import am from "../image/am.png";
import dm from "../image/dm.png";
import em from "../image/em.png";
import "./BeginnerSong.css";

export default class BeginnerSong extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={c} />
            <Card.Body className="card_body">
              <Card.Title className="title">C Major Chord</Card.Title>
              <Link to="/c">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={f} />
            <Card.Body className="card_body">
              <Card.Title className="title">F Major Chord</Card.Title>
              <Link to="/f">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={g} />
            <Card.Body className="card_body">
              <Card.Title className="title">G Major Chord</Card.Title>
              <Link to="/g">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="row">
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={am} />
            <Card.Body className="card_body">
              <Card.Title className="title">A Minor Major Chord</Card.Title>
              <Link to="/am">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={dm} />
            <Card.Body className="card_body">
              <Card.Title className="title">D Minor Major Chord</Card.Title>
              <Link to="/dm">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18em", margin: "30px", padding: "10px" }}>
            <Card.Img variant="top" src={em} />
            <Card.Body className="card_body">
              <Card.Title className="title">E Minor Major Chord</Card.Title>
              <Link to="/em">
                <Button variant="warning">Practice</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
