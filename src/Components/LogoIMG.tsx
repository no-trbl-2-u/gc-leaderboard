import React from 'react'
import Logo from '../Components/Images/Logo-with-SynchronyLEDs.png';

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