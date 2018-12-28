import React from 'react'
import Logo from './Logo-Jen-w-sparkle-04-2to1-on-black.png'
import TournamentText from './TournamentText'

function LogoIMG(props: any) {
  return (
    <section className="Logo-container">
      <a href="http://vizmoo.com/groovecatcher">
        <img 
          src={ Logo } 
          alt="Logo"
          className="Logo"
        />
      </a>
    </section>
  )
}

export default LogoIMG