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
    <div className='icon'><ion-icon name="logo-react"></ion-icon></div>
      <header className='section-header'>
      <div className='logo'>
      <ion-icon name="code-slash-outline"></ion-icon><span>LalitCodes</span>
      </div>
        <nav>
          <ul>
          
         
            <a href='../images/Resume.pdf' target='_blank' download><li className='common-btn btn-shadow'>Resume</li></a>
          
          
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar