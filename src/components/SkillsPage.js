import React from "react";
import Container from "react-bootstrap/Container";
import SkillCard from "./SkillCard";

const SkillsPage = () => {
  return (
    <Container>
      <h1 style={{ color: "white" }}>My Skills</h1>
      {/* <Row> */}
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />

      {/* </Row> */}
    </Container>
  );
};

export default SkillsPage;
