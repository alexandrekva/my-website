import React from "react";
import "./style.css";
export default function SkillLevel(props) {
  return (
    <div className="skill-level">
      <div className="level-container" style={{ width: `${props.level}%`}}> 
        <div className="level"/>
      </div>
    </div>
  );
}
