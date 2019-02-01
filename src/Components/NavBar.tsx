import React from 'react'

export default 
function NavBar(props: any) {
  return (
    <section className="NavBar">
      <ul>
        <li className="active"><a href="#" target="_blank">Home</a></li>
        <li><a href="#">Menus</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </section>
  )
}