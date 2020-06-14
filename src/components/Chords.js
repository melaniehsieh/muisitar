import React, { Component } from "react";
import { Card } from "react-bootstrap";
import c from "../image/c.webp";
import audio from "../image/c.mp3";
import video from "../image/cmaj.mp4";
const chords = [
  {
    img: c,
    title: "C Major Chord",
    text:
      "The C Major Chord is often the first chord guitarists learn. The fingering is fairly straightforward—the key is to concentrate on curling your first finger​ so that the first string rings open properly.",
  },
];

export default class Chords extends Component {
  render() {
    return (
      <div className="container">
        {chords &&
          chords.map((chords) => {
            return (
              <div className="row">
                <Card
                  style={{
                    width: "400px",
                    height: "10%",
                    margin: "30px",
                    padding: "10px",
                  }}
                >
                  <Card.Img variant="top" src={chords.img} />
                  <Card.Body className="card_body">
                    <Card.Title className="title">{chords.title}</Card.Title>
                    <audio ref="cmaj" src={audio} controls />
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "500px", margin: "30px", padding: "10px" }}
                >
                  <video width="450" height="600" loop autoPlay>
                    <source src={video} type="video/mp4" />
                  </video>
                  <Card.Text style={{ fontSize: "20px", margin: "30px" }}>
                    {chords.text}
                  </Card.Text>
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
