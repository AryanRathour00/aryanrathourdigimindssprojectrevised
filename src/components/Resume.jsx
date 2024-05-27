import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Resume = () => {
  return (
    <>
      <div className="container-fluid borderstyleresume">
        <div className="row">
          <div className="col-md-5 borderstyleSection1">
            <FirstSection />
          </div>
          <div className="col-md-7">
            <SecondSection/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
