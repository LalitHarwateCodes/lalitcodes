import React from 'react'
import '../styles/App.css'
import '../styles/Project.css'
import '../styles/queries.css'

function Projects() {
  return (
    <div className='section-project common-max-width margin--bottom-xl'> 
      <h2 className='section-title center margin--bottom'>Projects</h2>
      <div className='project-container'>
      <div className='project-block'>
      <img className='project-img' src={require('../images/cryptico.png')} alt=' cryptico project'/>
       <div className='project-content'>
       <div class="project-tags">
              <span class="tag">React</span>
            </div>
          <p className='project-title'>Cryptico</p>
          <p className='project-desc'>A simple, beginner-friendly React app allowing user to explore top cryptocurrencies, where they will find real-time prices of their favourite coins, high and low market prices, and the ability to search for more than 200 Cryptocurrencies.</p>
          <div className='block-cta'>
          <a href='https://github.com/LalitHarwateCodes/Cryptico' target='_blank' className='project-cta btn-shadow'>Source Code</a>
            <a href='https://lalitharwatecodes.github.io/Cryptico/' target='_blank' className='project-cta btn-shadow'>Visit</a>
          </div>
          </div>
       </div>
       <div className='project-block'>
      <img className='project-img' src={require('../images/cryptico.png')} alt='bitTracker project'/>
       <div className='project-content'>
       <div class="project-tags">
              <span class="tag">Django</span>
              <span class="tag">HTML/CSS</span>
              <span class="tag">JavaScript</span>
              <span class="tag">SQLlite</span>
            </div>
          <p className='project-title'>BitTracker</p>
          <p className='project-desc'>sadfjskljf</p>
          <div className='block-cta'>
            <a href='https://lalitharwatecodes.github.io/Cryptico/' target='_blank' className='project-cta btn-shadow'>Source Code</a>
            <a href='https://lalitharwatecodes.github.io/Cryptico/' target='_blank' className='project-cta btn-shadow'>Visit</a>
          </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Projects