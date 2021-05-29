import React, { useState } from "react";

import "./CSS/Contacts.css";
import twitter from "../components/image/twitter.svg";
import mail from "../components/image/email.svg";
import cv from "../components/image/cv.svg";
import github from "../components/image/github.svg";

function Contacts() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="about-container">
      {isLoading ? (
        <div class="arcade-10"></div>
      ) : (
        <>
          <div className="contacts">
            <h1 className="contacts-title">Contact Me</h1>
            <div>
              <a href="mailto:alokkola21@gmail.com">
                <img className="contacts-icon" src={mail} alt="mail" />
              </a>
              <a
                href="https://twitter.com/thecoollearner"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts-icon" src={twitter} alt="twitter" />
              </a>
              <a
                href="https://github.com/alok182011"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts-icon" src={github} alt="github" />
              </a>
              <a
                href="https://docs.google.com/presentation/d/1_Dk3dGI1ScolWPwAnzjRz3tXodFFhsn9mw4jB3KkT70/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts-icon" src={cv} alt="cv" />
              </a>
            </div>
            <p className="contacts-made">Made with ❤ by Alok</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Contacts;
