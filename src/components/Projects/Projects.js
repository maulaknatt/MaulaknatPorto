import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/ppob.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Group Chat"
              description="Personal Chat Room (Group) fungsinya yaitu untuk mengsharing berbagai source code "
              ghLink="https://github.com/maulaknatt/chattinggroup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PPOB"
              description="Ini adalah Website PPOB atau Payment Point Online Bank, Website ini menjual berbagai macam produk digital seperti diamond game, topup pulsa, pembelian internet dll."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Typing Test"
              description="Website adalah untuk mengetest seberapa cepat anda mengetik dengan keyboard"
              ghLink="https://github.com/maulaknatt/typingtestvesperto"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
