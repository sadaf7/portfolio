import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    const form = useRef();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sqs695n', 'template_qgh5kuq', form.current, 'lNA6oQ-T7LuMwOlA0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
                <MdOutlineMailOutline className='contact_option_icon'/>
                <h4>Email</h4>
                <h6>dev.sadaf404@gmail.com</h6>
                <a href="mailto:dev.sadaf404@gmail.com" target='_blank'>Send a Message</a>
            </article>

            <article className="contact_option">
                <FaWhatsapp className='contact_option_icon'/>
                <h4>WhatsApp</h4>
                <h6>+8801688070479</h6>
                <a href="https://wa.me/01688070479" target='_blank'>Send a Message</a>
            </article>
        </div>

        <form onSubmit={sendEmail} ref={form}>
            <input type="text" value={name} onChange={()=>setName(e.value.target)} name='name' placeholder='Enter Your Name'  required/>
            <input type="email" value={email} onChange={()=>setEmail(e.value.target)} name='email' placeholder='Enter Your Email' required />
            <textarea name="message" value={message} onChange={()=>setMessage(e.value.target)} rows="7" placeholder='Any Message?' required></textarea>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
