import React from 'react'
import Logo from './Twitter-blue.png';

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

      <div className="handle">
          @GrooveCatcher VR
      </div>
    </section>
  )
}

export default LogoIMG