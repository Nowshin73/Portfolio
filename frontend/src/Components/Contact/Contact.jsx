import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dirm55q', 'template_6m1r0dd', form.current, '8_84KpcT0GlXaAyc4').then((result) => {
      console.log(result.text);
      setDone(true)
    }, (error) => {
      console.log(error.text)
    });
  };
  
  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
          <span  style={{color: darkMode? 'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" 
          style={{backgroung:"#abf1ff94"}}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className='user' placeholder='Name'/>
          <input type="email" name="user_email" className='user' placeholder='Email'/>
          <textarea name="message" className='user' placeholder='Message'/>
          <input type="submit" value="Send" className='button d-button' />
          <span>{done && "Thanks for contacting me"}</span>
          <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact