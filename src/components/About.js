import React, { useState } from "react";
import image from "./dpnow.jpg";

import "./CSS/About.css";

function About() {
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
          <div className="about">
            <h1 className="about-title">About Me</h1>
            <img className="image" src={image} alt="alok" />
            <h2 className="about-desc">
              Web Developer 💻 &nbsp;&nbsp; mentor @ google DSC GITA 👨‍🏫
              <br />
              write tech blogs and poems ✍ &nbsp;&nbsp; give talks when I get
              chance 🎙
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
