import React from 'react'
import Gaurav_Raj_Profile_Pic from "./Gaurav_Raj_Profile_Pic.png"

import "./About.css";
const About = () => {
  return (
    <div id='about' className='about section'>
      <div id='about-heading'>
       <h1>About <span>Me</span></h1>
      </div>
      <div id='details'>
        <p>An Enthusiastic Web Developer, skilled in front-end Web Development. Knowlwdge of Core React,Javascript, HTML CSS, express, and MongoDB. Aims to leverage knowledge and build world-class websites while facilitating organization in achieving functional goals.</p>
        <div id='profile-pic'>
        <img src={Gaurav_Raj_Profile_Pic} alt="Gaurav Raj"/>
        </div>
      </div>
    </div>
    
  )
}

export default About;
