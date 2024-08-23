import React from 'react'
import "../css/Main.css"
import sidimage from "../images/sidimage.png"


function Home() {
  return (
    <section id="home" className='home-1' >
      <div className='profile-pic'> 
        <img src={sidimage} alt="" />
      </div>
      <div className='profile-content'>
        <h2>Hello I am, </h2>
        <h1>VIRUPAKSHA</h1>
        <p>Advance Personal Trainer.</p>
      </div>
    </section>
  )
}

export default Home
