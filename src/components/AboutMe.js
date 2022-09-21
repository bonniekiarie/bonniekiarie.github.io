import React from "react";
import  Container from 'react-bootstrap/Container'

const AboutMe = () =>{
    return (
        <Container className="about-me">
            <h3 style={{textAlign: 'left'}}>About Me</h3>
            <p>I am a fifth year student pursuing Bachelor's degree in Electrical
                and Electronics at the University of Nairobi. 
            I have various skills including programming in C/C++, Python, Javascript,
            Matlab and Java. I'm also knowledgeable in git, linux, SQL, bash scripting, web development
            using Django and React and mobile development using React Native.
            </p>
        </Container>
    )
}

export default AboutMe;