import React, { useState } from "react";

import "./CSS/Intro.css";

function Intro() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 0);

  return (
    <div className="intro-container">
      {isLoading ? (
        <div class="arcade-9"></div>
      ) : (
        <>
          <div className="intro">
            <h1 class=" flux">ALOK KUMAR</h1>
            <h3 class=" neon">
              <em>A Full-Stack Developer</em>
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Intro;
