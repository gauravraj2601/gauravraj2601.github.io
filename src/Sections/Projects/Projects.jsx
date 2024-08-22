import React from "react";
import "./Projects.css";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import INR from "./Images/INR Club.png";

const Projects = () => {
 

  const INRGit = () => {
    window.open("https://github.com/gauravraj2601/INR-Club");
  };
  const INRDep = () => {
    window.open("https://inrclub.netlify.app/");
  };

  const streetBitesGit = () => {
    window.open("https://github.com/gauravraj2601/ruthless-store-61");
  };

  const streetBitesDep = () => {
    window.open("https://the-street-bites.vercel.app/");
  };

  const electGit = () => {
    window.open("https://github.com/gauravraj2601/gusty-adjustment-6018");
  };

  const electDep = () => {
    window.open("https://elctronix-express-k74afyg3e-ganeshgourav.vercel.app/");
  };

  return (
    
      <div id="projects">
        <div id="project-heading">
          <h1>Projects</h1>
        </div>
        <div className="my_projects">
          <div className="project-card">
            <div className="project-image">
              <img
                src="https://user-images.githubusercontent.com/123883332/265188275-20f6e2dc-d103-464b-9bac-74e4f25d38ff.png"
                alt="electronix-express"
              />
            </div>
            <div className="project-info">
              <div className="project-title">
                <h2>Electronix Express!</h2>
              </div>
              <div className="project-description">
                <p>
                  Electronix Express is an e-commerce platform specializing in
                  electronic products. It offers a seamless online shopping
                  experience for electronics enthusiasts.
                </p>
              </div>
              <div className="project-tech-stack">
                <p>Tech-Stack: HTML | CSS | React | Chakra-UI | Redux </p>
              </div>
              <div className="project-links">
                <button className="project-github-link" onClick={electGit}>
                  <BsGithub />
                </button>

                <button className="project-deployed-link" onClick={electDep}>
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card2">
            <div className="project-image2">
              <img
                src="https://user-images.githubusercontent.com/123883332/271269370-1a0f372d-da62-41b4-847f-24d0d9c9b83e.png"
                alt="the-street-bites"
              />
            </div>
            <div className="project-info2">
              <div className="project-title2">
                <h2>The Street Bites</h2>
              </div>
              <div className="project-description2">
                <p>
                  The Street Bites is an online food ordering platform, inspired
                  by popular services like Uber Eats and Grubhub. It connects
                  hungry users with a variety of local food options for easy and
                  convenient dining.
                </p>
              </div>
              <div className="project-tech-stack2">
                <p>Tech-Stack: HTML | CSS | React | Chakra-UI</p>
              </div>
              <div className="project-links2">
                <button
                  className="project-github-link2"
                  onClick={streetBitesGit}
                >
                  <BsGithub />
                </button>
                <button
                  className="project-deployed-link2"
                  onClick={streetBitesDep}
                >
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={INR} alt="INR-club" />
            </div>
            <div className="project-info">
              <div className="project-title">
                <h2>INR Club</h2>
              </div>
              <div className="project-description">
                <p>
                  INR Club is your go-to hotel booking website, simplifying the
                  process of finding and reserving accommodations online.
                  Discover a wide range of hotels and book your stay with ease.
                </p>
              </div>
              <div className="project-tech-stack">
                <p>Tech-Stack: HTML | CSS | JavaScript</p>
              </div>
              <div className="project-links">
                <button className="project-github-link" onClick={INRGit}>
                  <BsGithub />
                </button>
                <button className="project-deployed-link" onClick={INRDep}>
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div>

          {/* <div className="project-card2">
            <div className="project-image2">
              <img
                src="https://www.linkpicture.com/q/Screenshot-768_1.png"
                alt="Expedia.com"
              />
            </div>
            <div className="project-info2">
              <div className="project-title2">
                <h2>Expedia.com</h2>
              </div>
              <div className="project-description2">
                <p>
                  Expedia.com is an E-commerce website that deals with travel
                  packages. A variety of services are available through the
                  website.
                </p>
              </div>
              <div className="project-tech-stack2">
                <p>Tech-Stack: HTML | CSS | JavaScript </p>
              </div>
              <div className="project-links2">
                <button className="project-github-link2" onClick={expGit}>
                  <BsGithub />
                </button>
                <button className="project-deployed-link2" onClick={expDem}>
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img
                src="https://www.linkpicture.com/q/Screenshot-766_1.png"
                alt="Style-Craze"
              />
            </div>
            <div className="project-info">
              <div className="project-title">
                <h2>StyleCraze</h2>
              </div>
              <div className="project-description">
                <p>
                  It is a clone website of stylecraze which deals in all kinds
                  of women products and problems
                </p>
              </div>
              <div className="project-tech-stack">
                <p>Tech-Stack: HTML | CSS | JavaScript </p>
              </div>
              <div className="project-links">
                <button className="project-github-link" onClick={styleGit}>
                  <BsGithub />
                </button>

                <button className="project-deployed-link" onClick={styleDem}>
                  <SiNetlify />
                </button>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    
  );
};

export default Projects;
