import React from "react";

const Work = () => {
  let responsibilitiesArray = [
    `Built and maintained webpages while communicating with cross-functional teams regarding product and design.`,
    ` Transformed UIs using JavaScript and Bootstrap, creating
       functional components which are easy to implement in any
       webpage.`,
    `   Focused on front-end development, handling interns with their
       assigned work and problems.`,
    `   Collaborated with a team of 7 to work on the UI changes or
        corrections in live product.`,
  ];
  return (
    <>
      <div className="work-section">
        <h3 className="title-sub">WORK EXPERIENCE</h3>
        <h5 className="fw-bolder">
          Salesqueen Software Solutions - Frontend Developer(Internship).
        </h5>
        <p className="text-dark"> Chennai, Remote,October 2023 – current </p>

        <ol>
          {responsibilitiesArray.map((element) => (
            <li>
              <p className="text-secondary">{element}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Work;
