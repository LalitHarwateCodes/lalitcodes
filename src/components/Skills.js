import React from 'react'
import '../styles/App.css'
import '../styles/Skills.css'
import '../styles/queries.css'

function Skills() {
  return (
    <div className='section-skills common-max-width margin--bottom-xl'>
      <h2 className='section-title margin--bottom'>Skills</h2>
      <div className='skills-container'>
        <div className='skills'><ion-icon classname='skill-icon' name="logo-react"></ion-icon> <span className='skill-text'>React</span></div>
        <div className='skills'><ion-icon classname='skill-icon' name="logo-javascript"></ion-icon><span className='skill-text'>JavaScript</span></div>
        <div className='skills'><ion-icon classname='skill-icon' name="logo-python"></ion-icon><span className='skill-text'>Python</span></div>
        <div className='skills'><ion-icon classname='skill-icon' name="logo-html5"></ion-icon><span className='skill-text'>HTML</span></div>
        <div className='skills'><ion-icon classname='skill-icon' name="logo-css3"></ion-icon><span className='skill-text'>CSS</span></div>
      </div>
    </div>
  )
}

export default Skills