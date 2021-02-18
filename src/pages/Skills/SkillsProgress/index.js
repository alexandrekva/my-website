import React from 'react'
import { SkillsData } from './SkillsData';
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Skills() {
    return (
        <div>
            <ul className="skills-ul">
                { SkillsData.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="skill-label">
                                {item.icon}
                                <span>{item.skill}</span>
                            </div>
                            <ProgressBar variant="info" now={item.level} srOnly/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
