import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Amare Yigzaw</span> from{" "}
              <span className="purple">Addis Abeba, Ethiopia.</span>
              <br />
              I have completed my BSc in Software Engineering at Wachemo University.
              <br />
              I am passionate about software development, building projects, and learning new technologies.
              <br />
              <br />
              Apart from coding, some other activities that I love to do include exploring tech trends, reading, and problem-solving.
            </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amare</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
