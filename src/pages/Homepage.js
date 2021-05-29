import React, { useContext } from "react";

import "./Homepage.css";

import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";

import { ComponentContext } from "../context/components";

function Homepage() {
  const { component } = useContext(ComponentContext);

  console.log(component);

  return (
    <div className="homepage-container">
      <Navbar />
      {(() => {
        switch (component) {
          case "homepage":
            return <Intro />;
          case "about":
            return <About />;
          case "projects":
            return <Projects />;
          case "skills":
            return <Skills />;
          case "contacts":
            return <Contacts />;

          default:
            return <Intro />;
        }
      })()}
      <Controls />
    </div>
  );
}

export default Homepage;
