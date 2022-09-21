import React from "react";
import Profile from "./Profile";
import Content from "./Content";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    // <section >
    <Container fluid className="welcome-content">
      <Row className="profile-content">
        <Col lg={4} md={4} sm={4}>
          <Profile />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <Content />
        </Col>
      </Row>
      <Row>
        <Col>
          <AboutMe />
        </Col>
      </Row>
      <Row>
        <Col>
          <Contact />
        </Col>
      </Row>
    </Container>
    // </section>
  );
};

export default Home;
