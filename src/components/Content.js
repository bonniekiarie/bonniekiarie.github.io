import React from "react";
import { TypeAnimation } from "react-type-animation";

const Content = () => {
  return (
    <div className="content">
      <h6>Hello, I'm</h6>
      <TypeAnimation
        sequence={["Bonface Kiarie", 2000]}
        style={{ fontSize: "3em", margin: "0%" }}
        wrapper="h1"
        cursor={false}
        repeat={1}
      />
      <TypeAnimation
        sequence={["Electrical Engineer", 1000, "Software Engineer", 1000]}
        style={{ fontSize: "2em", margin: "0%" }}
        wrapper="h2"
        repeat={Infinity}
      />
      <div className="small-box" style={{marginTop:'25px'}}>
        <h3>Welcome To My Portfolio</h3>
      </div>
    </div>
  );
};

export default Content;
