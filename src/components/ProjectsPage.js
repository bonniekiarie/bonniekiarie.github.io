import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import doorAutomationPic from "../door-automation-pic.jpg";

const ProjectsPage = () => {
  return (
    <Container className="projects-page">
      <h1>My Projects</h1>
      <Row>
        <Col>
          <ProjectCard
            src={doorAutomationPic}
            projectTitle={"Door Automation"}
            projectDetail={`In this project we designed a door
             access control prototype by using several access
              methods i.e card access, passsword access and through
               facial recognition.`}
          />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
