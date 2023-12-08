import React from 'react'
import "./Home.css";
import { Type } from '../../Components/Type';
import {BsGithub,BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import {FaPhoneAlt} from "react-icons/fa";
import {HiDownload} from "react-icons/hi";
import Gaurav_Raj_Resume from "../../Components/Downloads/Gaurav_Raj_Resume.pdf";

const Home = () => {
  const handleClick = () => {
    const url ="https://drive.google.com/file/d/1HWk9lsQTSVQcGmPv4nv9MFnqO-wsRBNS/view?usp=sharing";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Gaurav_Raj_Resume.pdf";
    link.click();
  };
  const handleOpenMailPage = () => {
    window.open('mailto:gauravraj2601@gmail.com');
  };
  const handleGit = () => {
    window.open("https://github.com/gauravraj2601");
  };
  const handlePhoneClick = () => {
    window.open('tel:+918083368861'); 
  };
   const handleLikedin = () => {
    window.open("https://www.linkedin.com/in/gaurav-raj-915150157/");
  };
  return (
    
     <div id="home">
        <div id='heading'>
          <h1 id='name'>Hello, I am <span>Gaurav Raj</span></h1>
            <h1 id='type'><Type /></h1>
        </div>
        <div id="resume-btn-2">
          <a   id="resume-link-2"
                href={Gaurav_Raj_Resume}
                download="Gaurav_Raj_Resume"><button onClick={handleClick}><HiDownload /> Resume</button></a>
           
        </div>
        <div id="social-links">
        <BsGithub className='social-icons' onClick={handleGit} /> 
        <SiGmail className='social-icons' onClick={handleOpenMailPage}  />
        <FaPhoneAlt className='social-icons' onClick={handlePhoneClick}/>
        <BsLinkedin className='social-icons' onClick={handleLikedin}/>
        </div>
        </div> 
    
  )
}

export default Home;
