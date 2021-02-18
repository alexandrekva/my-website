import React from "react";
import SkillsProgress from "./SkillsProgress";
import "./style.css";

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <span className="title">Tecnologias</span>
        <SkillsProgress />
      </div>
    </div>
  );
}
