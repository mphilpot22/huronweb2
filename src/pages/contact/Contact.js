import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up6iyhm', 'template_man9pe2', form.current, 'ND-rT-d0Ei_58ezwp')
      .then((result) => {
          alert("Your message has been sent.");
          e.target.reset();
      }, (error) => {
          alert("There has been an error. Please try again.");
      });
  };

  function onChange(value) {
    console.log('Captcha value:', value);
  }
  
  return (
    <div id='contact-us'>
      <h1>Contact us today for a free, no obligation consultation.</h1>
      <form ref={form} onSubmit={sendEmail} id='contact-form'>
          <input type="text" className='form-control' placeholder='Name' name='from_name' required/>
          <input type="text" className='form-control' placeholder='Business Name' name='business_name' required/>
          <input type="text" className='form-control' placeholder='Industry' name='industry' required/>
          <input type="phone" className='form-control' placeholder='Phone' name='phone' required/>
          <input type="email" className='form-control' placeholder='Email' name='email' required/>
          <textarea name="form-control" id="" cols="30" rows="10" placeholder='Your message' name="message"></textarea>
          <ReCAPTCHA
            sitekey="6Leknc4hAAAAANuTWUI9pUES5GtMPHunYR8yl5Xo"
            onChange={onChange} required/>
          <input type="submit" className='form-submit-btn' value='Send Message'/>
      </form>
    </div>
  )
}

export default Contact