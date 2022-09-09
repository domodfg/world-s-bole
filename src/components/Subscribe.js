import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/subscribe.css"

// email:wbsoftware@hotmail.com
// password: 1a23456678

// emailJS:facebe9622@nicoimg.com
// password: 1a23456678

const PUBLIC_KEY = "jFhET9ib_PNnK18T-"
const TEMPLATE_ID = "template_rkx54av"
const SERVICE_ID = "service_e1c2ayo"

export const Subscribe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='subscribe-container'>
        <form className="email" ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input type="email" name="user_email" />
          <input type="submit" value="Send" />
        </form>
      </div>
  );
};