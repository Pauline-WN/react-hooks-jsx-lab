import React from 'react';
import image from '../images/demo.png'; // Update this path as needed

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Here is some information about me. Feel free to add any content you like.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
