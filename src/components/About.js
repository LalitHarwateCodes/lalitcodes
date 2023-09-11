import React from 'react'
import '../styles/About.css'
import '../styles/App.css'
import '../styles/queries.css'

function About() {
  return (
    <div className='section-about common-max-width margin--bottom-xl'>
    
      <h2 className='section-title margin--bottom'>About</h2>
      <div className='about-grid '>
      <h2 className='about-title'>👋 Hi, I'm Lalit Harwate!

I'm a passionate Front-End React Developer with more than 2 years of experience.

🚀 My React.js skills allow me to craft engaging and responsive user interfaces. I thrive on turning complex ideas into elegant, interactive, and scalable web solutions. 🌟 My goal is to bridge the gap between design and functionality, ensuring that the user experience is seamless and delightful.
{/* <br/> */}
📧 Feel free to reach out to me at <span className='highlight'>lalitharwate90@gmail.com</span> to discuss potential opportunities or just to chat about tech, React.js, or any other interesting topic!
</h2>
      <img src={require('../images/profile-photo.jpg')} className='about-photo' alt='profile'/>
      </div>
    </div>
  )
}

export default About