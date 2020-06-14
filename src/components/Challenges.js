import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import rid from "../image/rid.jpg";
import perfect from "../image/perfect.jpg";
import locked from "../image/lock.png";
import "./BeginnerSong.css";

const songs = [
  { img: rid, title: "Rolling in the Deep", artist: "Adele", id: "/rid" },
  { img: perfect, title: "Perfect", artist: "Ed Sheeran", id: "/perfect" },
  { img: locked, title: "Best Part of Me", artist: "Ed Sheeran", id: "/bpof" },
  {
    img: locked,
    title: "Dancing with a stranger",
    artist: "Sam Smith",
    id: "/dwas",
  },
];

export default class Challenges extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {songs &&
            songs.map((song) => {
              return (
                <Card
                  style={{ width: "18em", margin: "30px", padding: "10px" }}
                >
                  <Card.Img variant="top" src={song.img} />
                  <Card.Body className="card_body">
                    <Card.Title className="title">{song.tile}</Card.Title>
                    <Card.Text>{song.artist}</Card.Text>
                    <Link to={song.id}>
                      <Button variant="warning">Challenge</Button>
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
