import React, { useState, useEffect } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  //TODO: use state hook, keep track of the form error, use regex/ match function on the string 
  function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };
  
  const [values, setValues] = useState({ email: '', });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {}
  }, [errors]);

  const onChange = (event) => {
    event.persist();
    setValues(values => ({ ...values,
      [event.target.name]: event.target.value
    }));
  };
  const onSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //TODO: to valid the email address, if valid, then send the request to the server, if invalid, set state hook = true
    
    
    emailjs.sendForm('service_abx1trf', 'template_r666apf', form.current, 'YFjKMbc5Wu-ct32A2')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hello@gmail.com</h5>
            <a href="mailto:hello@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Xiao</h5>
            <a href="https://m.me/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+12345678</h5>
            <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' onChange = {onChange} value = {values.email} required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          { errors.email && ( <p className = "help is-danger">{errors.email}</p> ) }
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact