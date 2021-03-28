import React from "react";
import Typing from "react-typing-animation";
import "./style.css";

export default function About() {
  return (
    <div className="about">
      <div className="intro">
        <Typing>
          <h1>Hello world,</h1>
          <h1 className="sub-text">me chamo Alexandre!</h1>
        </Typing>
      </div>
      <div className="infos-container">
        <div className="infos">
          <div className="about-me">
            <h2>Quem sou eu?</h2>
            <p>
              Sou um estudante do curso de Engenharia de Software que adora
              tecnologia e desafios. Desde que descobri as possibilidades quase
              infinitas que temos apenas utilizando a criatividade e um
              computador, decidi que me tornaria um desenvolvedor!
            </p>
          </div>
          <div className="experiences">
            <h2>Experiências</h2>
            <p>
              Atualmente estou estagiando na Ford Brasil no time de
              desenvolvimento de software. Inicialmente participei no desenvolvimento de uma aplicação web utilizando React, e atualmente estou participando no desenvolvimento de uma aplicação mobile Android nativo. Também tenho alguns projetos pessoais
              que desenvolvi que você pode conferir na aba portfólio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
