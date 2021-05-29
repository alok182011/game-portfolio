import React, { useState } from "react";

import "./CSS/Skills.css";

function Skills() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="skills-container">
      {isLoading ? (
        <div class="arcade-10"></div>
      ) : (
        <>
          <div className="skills">
            <h1 className="skills-title">Skills</h1>
            <h2 className="skills-name">
              HTML, CSS, JAVASCRIPT &emsp;&nbsp; REACT
              &emsp;&emsp;&emsp;&emsp;&nbsp; HOOKS
            </h2>
            <h2 className="skills-name">
              REDUX &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; CONTEXT
              &emsp;&emsp;&emsp;&emsp;BOOTSTRAP
            </h2>
            <h2 className="skills-name">
              GRAPHQL, APOLLO&emsp;&emsp;&emsp;&emsp; NODE.JS
              &emsp;&emsp;&emsp;&emsp; EXPRESS
            </h2>
            <h2 className="skills-name">
              MONGODB &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; MONGOOSE
              &emsp;&emsp;&emsp; GIT/GITHUB
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Skills;
