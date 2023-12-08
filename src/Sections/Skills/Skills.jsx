import React from 'react'
import "./Skills.css";
import Tools from '../Tools/Tools';

const Tech_skills = [
    { id: 1, skill: "HTML", img: "https://img.icons8.com/color/256/html-5.png" },
    { id: 2, skill: "CSS", img: "https://img.icons8.com/fluency/256/css3.png" },
    {
      id: 3,
      skill: "JavaScript",
      img: "https://img.icons8.com/fluency/256/javascript.png",
    },
    {
      id: 4,
      skill: "React",
      img: "https://img.icons8.com/officel/256/react.png",
    },
    { id: 12, 
      skill: "Redux",
      img: "https://img.icons8.com/color/256/redux.png" 
    },
    {
      id: 5,
      skill: "Chakra-UI",
      img: "https://img.icons8.com/color/256/chakra-ui.png",
    },
    {
      id: 7,
      skill: "TypeScript",
      img: "https://img.icons8.com/color/256/typescript.png",
    },
  
    { id: 9, skill: "Node", img: "https://img.icons8.com/color/256/nodejs.png" },
    {
      id: 10,
      skill: "ExpressJs",
      img: "https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png",
    },
    {
      id: 11,
      skill: "MongoDb",
      img: "https://img.icons8.com/color/256/mongodb.png",
    },
  ];

const Skills = () => {
  return (
    
    <div id='skills'>
      <div id='skill-heading'>
        <h1>Skills</h1>
      </div>
        <div id="skills_box">
        {Tech_skills.map((el) => {
          return (
            <div className="skills-card">
              <div id="skill-logo">
                <img className="skills-card-img" src={el.img} alt={el.skill} />
              </div>
              <div className="skill-title">
                <p className="skills-card-name">{el.skill}</p>
              </div>
            </div>
          );
        })}
        </div>
        <Tools />
      </div>
    
  )
}

export default Skills;
