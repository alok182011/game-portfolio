import React, { useContext } from "react";

import "./CSS/Controls.css";

import { ComponentContext } from "../context/components";

function Controls() {
  const { changeComponent } = useContext(ComponentContext);

  return (
    <div className="controls">
      <div className="control-button">
        <span onClick={() => changeComponent("homepage")}>🤵</span>
      </div>

      <div class="directions">
        <div class="div1">
          <span>About Me ⬆</span>
        </div>
        <div class="div2">
          <span>⬅ Projects</span>
        </div>
        <div class="div3">
          <span>Skills ➡</span>
        </div>
        <div class="div4">
          <span>⬇ Contacts</span>
        </div>
      </div>

      <div class="parent">
        <div class="div1 control-arrow-button">
          <span onClick={() => changeComponent("about")}>⬆</span>
        </div>
        <div class="div2 control-arrow-button">
          <span onClick={() => changeComponent("projects")}>⬅</span>
        </div>
        <div class="div3 control-arrow-button">
          <span onClick={() => changeComponent("skills")}>➡</span>
        </div>
        <div class="div4 control-arrow-button">
          <span onClick={() => changeComponent("contacts")}>⬇</span>
        </div>
      </div>
    </div>
  );
}

export default Controls;
