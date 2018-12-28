import React from 'react'
import Logo from './Logo-Jen-w-sparkle-04-2to1-on-black.png'
import TournamentText from './TournamentText'

function LogoIMG(props: any) {
  return (
    <section className="Logo-container">
      <img 
        src={ Logo } 
        alt="Logo"
        className="Logo"
        />
    </section>
  )
}

export default LogoIMG