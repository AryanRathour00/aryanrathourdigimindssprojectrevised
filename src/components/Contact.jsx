import React from "react";
import { BsGithub, BsEnvelope, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  let contactLinksArray = [
    {
      link: "https://aryanrathour00@gmail.com",
      name: "aryanrathour00@gmail.com",
      linkIcon: <BsEnvelope/>,
    },
    {
      link: "https://github.com/AryanRathour00",
      name: "AryanRathour/github",
      linkIcon: <BsGithub />,
    },
    {
      link: "https://www.linkedin.com/in/aryan-rathour/",
      name: " AryanRathour/linkedIn",
        linkIcon:  <BsLinkedin/>,
    },
  ];
  return (
    <>
      <div className="contact-section">
        <h3 className="title-sub">CONTACT</h3>
        <ul>
          {
            contactLinksArray.map((element)=>(
                <li key={element.name}>
                <a className="contact-link text-secondary" href={element.link}>{element.linkIcon} <span className="ms-2">{element.name}</span></a>
              </li> 
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default Contact;
