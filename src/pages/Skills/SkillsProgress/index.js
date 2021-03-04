import React from 'react'
import { SkillsData } from './SkillsData';
import SkillLevel from "./SkillLevel";
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
                            <SkillLevel level={item.level} />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
