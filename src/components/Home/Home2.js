import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Untitled.remini-enhanced.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Saya sedang belajar bahasa pemograman dan menurut saya ini menarik… 🤷‍♂️
              <br />
              <br />Saya sedang belajar bahasa pemograman seperti 
              <i>
                <b className="purple"> PHP, Javascript and Pthon. </b>
              </i>
              <br />
              <br />
              Saya mempunyai tujuan untuk mempelajari bahasa pemograman yaitu &nbsp;
              <i>
                <b className="purple">Membuat Game </b> and
                dan membuat{" "}
                <b className="purple">
                  Home Server.
                </b>
              </i>
              <br />
              <br />
            
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
  src={myImg}
  className="img-fluid"
  alt="avatar"
  style={{ width: "500px", height: "500px", borderRadius: "50%", objectFit: "cover" }}
/>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maulaknatt"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maulana-bagus-367614252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/maullz._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
