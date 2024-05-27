import React from "react";
import Skill from "./Skill";
import Education from "./Education";
import Contact from "./Contact.jsx";

const FirstSection = () => {
  return (
    <>
      <div className="row ps-2">
        <div className="col-12 mt-3 mb-4">
          <Contact/>
        </div>
        <div className="col-12 mt-3 mb-4">
           <Skill/>
        </div>
        <div className="col-12 mt-3 mb-4">
           <Education/>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
