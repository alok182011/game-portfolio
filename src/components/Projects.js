import React, { useState } from "react";

import "./CSS/Projects.css";

function Projects() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 0);

  return (
    <div className="projects-container">
      {isLoading ? (
        <div class="arcade-10"></div>
      ) : (
        <>
          <div className="projects">
            <h1 className="projects-title">Recent Projects and Blogs</h1>
            <h2 className="project-details">
              👉
              <a
                href="https://helper-helper.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="project-name"
              >
                Helper
              </a>
              <span className="project-desc">
                &nbsp;&nbsp;A web app where you can ask for help
                (MERN,Graphql,Apollo)
              </span>
            </h2>
            <h2 className="project-details">
              👉
              <a
                className="project-name"
                href="https://crownmall.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Crown Mall
              </a>
              <span className="project-desc">
                &nbsp;&nbsp;An E-Commerce Site (React,redux,Firebase)
              </span>
            </h2>
            <h2 className="project-details">
              👉
              <a
                className="project-name"
                href="https://pairprogrammer.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Pair-Programmer
              </a>
              <span className="project-desc">
                &nbsp;&nbsp;A web app where you can find Pair Programmers (MEN)
              </span>
            </h2>
            <h2 className="project-details">
              👉
              <a
                className="project-name"
                href="https://todo-boardd.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Todo-Board
              </a>
              <span className="project-desc">
                &nbsp;&nbsp;Todo-list App. (React, Semantic-ui, Context)
              </span>
            </h2>
            <h2 className="project-details">
              👉
              <a
                className="project-name"
                href="https://dev.to/thecoollearner"
                target="_blank"
                rel="noreferrer"
              >
                DEV.TO
              </a>
              <span className="project-desc">&nbsp;&nbsp;⬅ read my blogs</span>
            </h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
