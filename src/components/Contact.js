import React, { useState } from 'react'
import '../styles/App.css'
import '../styles/Project.css'
import '../styles/Contact.css'


function Contact() {

  const [user,setUser] = useState({

    name:'',
    email:'',
    comment:''
  })

 
  
  return (
    <div className='section-contact common-max-width margin--bottom-xl'>
      <h2 className='section-title margin--bottom'>Contact</h2>
      <div className='contact-content'>
        <form className='contact-form' action="https://formsubmit.co/c780aa14ea2dfe5e1fa114f67107ef88 " method="POST">
       
          <input className='input-text' name='name' type='text' required value={user.name} placeholder='Enter name' onChange={e => setUser({...user,name:e.target.value})}/>
          <input className='input-text' name='email' type='email' required value={user.email} onChange={e => setUser({...user,email:e.target.value})} placeholder='example@abc.com'/>
          <textarea className='input-textarea' name='comment' required value={user.comment} onChange={e => setUser({...user,comment:e.target.value})} placeholder='Enter comment'></textarea>
          <button className='project-cta btn-shadow big--xl'>Submit</button>
        </form>
      </div>
    </div>
  )
  }

export default Contact