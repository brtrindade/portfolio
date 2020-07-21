import React from 'react'
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import './styles.css'

export default function Header() {
  return (
    <header className="header">
      <p className="header__title">Bem Vindo(a),</p>
      <div className="header__social-medias">
        <IconContext.Provider value={{size: 24, className: 'icon'}} >
          <a href="https://www.linkedin.com/in/bruno-trindade-miranda-miguel/"><FaLinkedin /></a>        
          <a href="https://github.com/brtrindade"><FaGithub /></a>
        </IconContext.Provider>
      </div>
    </header>
  )
}
