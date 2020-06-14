import React, { Component } from "react";
import { Card } from "react-bootstrap";
import diagram from "../image/chord-diagram.png";
import a from "../image/chorusa.png";
import b from "../image/chorusb.png";
import c from "../image/chorusc.png";
import rid from "../image/rid.jpg";

const chords = [
  {
    image: diagram,
    title: "Rolling in the Deep",
  },
];

export default class Adele extends Component {
  render() {
    return (
      <div className="container">
        <Card.Img style={{ width: "900px" }} variant="top" src={rid} />
        {chords &&
          chords.map((chords) => {
            return (
              <div className="row">
                <Card
                  style={{
                    width: "300px",
                    margin: "30px",
                    marginRight: "0px",
                    padding: "10px",
                  }}
                >
                  <Card.Body className="card_body">
                    <Card.Title className="title">{chords.title}</Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        margin: "10px",
                      }}
                    >
                      <b>
                        Difficulty: Intermediate <br /> Tuning: E A D G B E
                      </b>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    width: "700px",
                    height: "200px",
                    margin: "30px",
                    padding: "10px",
                  }}
                >
                  <Card.Img variant="top" src={chords.image} />
                </Card>
                <Card
                  style={{ width: "1000px", margin: "30px", padding: "10px" }}
                >
                  <Card.Text style={{ fontSize: "20px", margin: "30px" }}>
                    Chorus 1
                  </Card.Text>
                  <Card.Img variant="top" src={a} />
                </Card>
                <Card
                  style={{ width: "1000px", margin: "30px", padding: "10px" }}
                >
                  <Card.Text style={{ fontSize: "20px", margin: "30px" }}>
                    Chorus 2
                  </Card.Text>
                  <Card.Img variant="top" src={b} />
                </Card>
                <Card
                  style={{ width: "1000px", margin: "30px", padding: "10px" }}
                >
                  <Card.Text style={{ fontSize: "20px", margin: "30px" }}>
                    Chorus 3
                  </Card.Text>
                  <Card.Img variant="top" src={c} />
                </Card>
              </div>
            );
          })}
      </div>
    );
  }
}
