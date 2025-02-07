import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='contact-main'>
    <div className='form-box'>
        <form className='contact-form'>
            <label>Name</label>
            <input type='text' placeholder='Enter Name'></input>
            <label>E-mail</label>
            <input type='email' placeholder='Enter email'></input>
            <label>Phone Number</label>
            <input type='' placeholder='Enter phone number'></input>
            <label>Message</label>
            <textarea placeholder='Enter a message'></textarea>
            <input className='submit-btn' type='submit'></input>
      </form>
    </div>
    </div>

  )
}

export default Contact
