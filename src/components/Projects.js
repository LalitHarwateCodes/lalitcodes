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
            <button className='project-cta btn-shadow'>Source Code</button>
            <button className='project-cta btn-shadow'>Visit</button>
          </div>
          </div>
       </div>
       <div className='project-block'>
      <img className='project-img' src={require('../images/cryptico.png')} alt='bitTracker project'/>
       <div className='project-content'>
       <div class="project-tags">
              <span class="tag">Django</span>
              <span class="tag">HTML</span>
              <span class="tag">CSS</span>
              <span class="tag">JavaScript</span>
            </div>
          <p className='project-title'>BitTracker</p>
          <p className='project-desc'>sadfjskljf</p>
          <div className='block-cta'>
            <button className='project-cta btn-shadow'>Source Code</button>
            <button className='project-cta btn-shadow'>Visit</button>
          </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Projects