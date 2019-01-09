import React from 'react'
import Logo from '../Components/Images/FbIgTwLogos.jpeg';

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
          @GrooveCatcherVR
      </div>
    </section>
  )
}

export default LogoIMG