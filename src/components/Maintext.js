import React from 'react'
import "../styles/Maintext.css"
import '../styles/App.css'
import '../styles/queries.css'

function Maintext() {
  return (
    <div className='main-header'>
    <div className='main-text'>
    <h2 className='heading-primary'>Front-End React Developer<span className='sm'>🚀</span></h2>
    <p className='heading-secondary'>A passionate <span className='highlight'>Frontend Developer</span> specialized in building stunning pixel-perfect interactive websites/applications.</p>
    <div className='header-cta'>
    
        <ion-icon className='cta' name="logo-linkedin"></ion-icon>
        <ion-icon className='cta' name="logo-github"></ion-icon>
    </div>
    </div>

    <div className='img-box'>
    <img className='header-img'  src={require('../images/logo-new.png')} alt='img'/>
    <img className='header-se'  src={require('../images/p-new.png')} alt='img'/>
    </div>
    </div>
  )
}

export default Maintext