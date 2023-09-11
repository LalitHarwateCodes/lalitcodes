import React, { useState } from 'react'
import "../styles/Navbar.css"
import '../styles/queries.css'

function Navbar() {

  const [width,setWidth] = useState(window.innerWidth)

  const showResume = (prev) => {
      setWidth(prev)
  }
  return (
    <div>
      <header className='section-header'>
      <div className='logo'>
      <ion-icon name="code-slash-outline"></ion-icon><span>LalitCodes</span>
      </div>
        <nav>
          <ul>
          
         
            <li className='common-btn btn-shadow'>Resume</li>
          
          
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar