import React from 'react';
import Header from '../../components/Header'
import fullstackImg from '../../assets/fullstack.svg'

import './styles.css'

export default function Main() {
  return (
    <div className="container">
      <Header />
      <section className="welcome">
        <div className="welcome__info">
          <h1 className="welcome__info--title">Bruno Trindade</h1>
          <p className="welcome__info--paragraph">Full Stack Developer</p>
          <p className="welcome__info--paragraph">Node, React, React Native</p>
        </div>
        <figure className="welcome__img">
          <img src={fullstackImg} alt=""/>
        </figure>
      </section>
      <section className="bio">
        <h1 className="bio__title">Quem eu sou</h1>
        <p className="bio__info">
          Desenvolvedor fullstack nas técnologias Nodejs, React e React Native.
          Graduando em Análise e Desenvolvimento de Sistemas e formado como Técnico de Informática pelo Instituto Federal do Espírito Santo.
        </p>
      </section>
    </div>
  )
}
