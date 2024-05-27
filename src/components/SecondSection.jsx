import React from "react";
import About from "./About";
import Work from "./Work";

const SecondSection = () => {
  return (
    <>
      <div className="row ps-2">
        <div className="col-12 mt-3 mb-4">
          <About />
        </div>
        <div className="col-12 mt-3 mb-4">
          <Work />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
