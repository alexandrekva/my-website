import React from 'react'
import { PortfolioData } from './PortfolioData';
import PortfolioItem from './PortfolioItem';
import './style.css';

export default function PortfolioList() {
    return (
        <div className="portfolio-list">
            <h1 className="portfolio-title">Projetos</h1>
                {PortfolioData.map((item, index) => {
                    console.log(PortfolioData)
                    return (
                            <PortfolioItem key={index} project={item}/>
                    );
                })}
        </div>
    )
}
