import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from '@emailjs/browser';
const SERVICE_ID = "service_4eyipb1";
const TEMPLATE_ID = "template_xb64ars";
const PUBLIC_KEY = "QHxcUD8SbxNr0YMXd";
const Contacts = () => {

  const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      };
  

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bhushanmali96@gmail.com</h5>
            <a href="mailto:bhushanmali96@gmail.com">Send a message</a>
          </article>
        </div>

        <form class="formContainer" onSubmit={handleOnSubmit}>
                <div class="formElement">
                    <label for="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div class="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div class="formElement">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
      </div>    
    </section>
  )
}

export default Contacts
