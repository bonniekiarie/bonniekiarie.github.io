import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container fluid className="contact-container">
      <Row>
        <Col style={{paddingLeft: '8%', marginBottom: '3%'}}>
          <h5 style={{ color: "white", textAlign: 'left' }}>Let's Connect</h5>
        </Col>
      </Row>
      <Row className="contact">
        <Col lg={3} md = {4} sm = {4} xs= {7} className="small-box">
          <span>
            {" "}
            <MdEmail />
            mugwira.kiarie@gmail.com
          </span>
        </Col>
        <Col lg={2} md = {3} sm = {3} xs= {7} className="small-box">
          <span>
            <BsLinkedin /> mugwira kiarie
          </span>
        </Col>
        <Col lg={2} md = {3} sm = {3} xs= {7} className="small-box">
          <BsWhatsapp />
          <span> 0745999389</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
