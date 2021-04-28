import React from 'react'
import './style.css'

export default function PortfolioItem(props) {


    return (
        <div className="item-container">
            <div className="item-content">
                <h1>{props.project.title}</h1>
                <p>{props.project.description}</p>
                <div className="portfolio-item-links">
                    <a href={props.project.link} target="_blank" rel="noopener noreferrer">{props.project.linkText}</a>
                    <a href={props.project.gitLink} target="_blank" rel="noopener noreferrer">{props.project.gitText}</a>
                    </div>
            </div>
            <div className="img-container">
                <img src={props.project.img} alt="Project"/>
            </div>
                
        </div>
    )
}
