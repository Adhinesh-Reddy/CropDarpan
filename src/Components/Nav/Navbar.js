import React from 'react'

const Navbar = () => {
  return(
    <div>
      <nav>
        <div className = "navbar-left">
          <img src="./logo.png" width="140" height="110" alt="#lite"/>
          <p className="title">A Crop Diagonistic Tool</p>
        </div>
        <div className='navbar-middle'>
          <ul className='navbarlist'>
            <li>
              <a href="#" style={{color: 'rgb(42, 221, 42)'}}>Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
            <li>
              <a href="#">Download App</a>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul>
            <li className ="li1">
              <a href="#">English</a>
            </li>
            <li>|</li>
            <li>
              <a href="#">తెలుగు</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
