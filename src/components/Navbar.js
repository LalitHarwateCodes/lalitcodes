import React from 'react'
import "../styles/Navbar.css"
import '../styles/queries.css'

function Navbar() {
  return (
    <div>
      <header className='section-header'>
      <div className='logo'>
      <ion-icon name="code-slash-outline"></ion-icon><span>LalitCodes</span>
      </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li>|</li>
            <li className='common-btn btn-shadow'>Resume</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar