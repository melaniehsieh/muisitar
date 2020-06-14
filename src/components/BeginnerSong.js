import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import a from "../image/a.webp";
import c from "../image/c.webp";
import d from "../image/d.webp";
import e from "../image/e.webp";
import g from "../image/g.webp";
import am from "../image/am.webp";
import dm from "../image/dm.webp";
import em from "../image/em.webp";
import "./BeginnerSong.css";

const chords = [
  { img: a, title: "A Major Chord", id: "/a-major" },
  { img: c, title: "C Major Chord", id: "/c-major" },
  { img: d, title: "D Major Chord", id: "/d-major" },
  { img: e, title: "E Major Chord", id: "/e-major" },
  { img: g, title: "G Major Chord", id: "/g-major" },
  { img: am, title: "A Minor Chord", id: "/a-minor" },
  { img: dm, title: "D Minor Chord", id: "/d-minor" },
  { img: em, title: "E Minor Chord", id: "/e-minor" },
];

export default class BeginnerSong extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {chords &&
            chords.map((chords) => {
              return (
                <Card
                  style={{ width: "18em", margin: "30px", padding: "10px" }}
                >
                  <Card.Img variant="top" src={chords.img} />
                  <Card.Body className="card_body">
                    <Card.Title className="title">{chords.title}</Card.Title>
                    <Link to={chords.id}>
                      <Button variant="warning">Practice</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    );
  }
}
