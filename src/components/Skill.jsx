import React from "react";

const Skill = () => {
    let skillsArray= [
        {
            "skillsheading" : "Frontend Development",
            "skills" :"HTML5, CSS3, JavaScript, Bootstrap."
        },{
            "skillsheading" : "Tools",
            "skills" :"VS code, GitHub, Git."
        }
    ]
  return (
    <>
      <div className="skills-section">
        <h3 className="title-sub">SKILLs</h3>
        <ul>
         {skillsArray.map((element)=>(
            <li>
            <span className="fw-bolder">{element.skillsheading}</span>:<span className="ms-2 text-secondary">{element.skills}</span>
          </li>
         ))}      
        </ul>
      </div>
    </>
  );
};

export default Skill;
