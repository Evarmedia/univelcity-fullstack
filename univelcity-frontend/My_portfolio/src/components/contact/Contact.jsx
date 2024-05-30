import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from "react-icons/fa";

import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_rzmp5sp',
        'template_g1xwuqi',
        formRef.current,
        'pC0awyBCZQFkU87a-'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mishakmanuel@gmail.com</h5>
            <a href="mailto:mishakmanuel@gmail.com">Send a message</a>
          </article>
        </div>

        <div className="contact__options">
          <article className="contact__option">
            <FaPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+2348166593337</h5>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            disabled
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
            disabled
          />
          <textarea
            placeholder="Your message"
            rows="5"
            name="message"
            required
            disabled
          ></textarea>
          <button disabled type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, for Reaching Out, I'll reply soonest :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
