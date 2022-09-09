import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/subscription.css"

// email:wbsoftware@hotmail.com
// password: 1a23456678

// emailJS:facebe9622@nicoimg.com
// password: 1a23456678

const PUBLIC_KEY = "jFhET9ib_PNnK18T-"
const TEMPLATE_ID = "template_rkx54av"
const SERVICE_ID = "service_e1c2ayo"

export const Subscription = () => {
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
        <h3 className='subs-title'>不要錯過任何最新資訊</h3>
        <p className='subs-info'>立即訂閱，獲取最新消息。</p>
        <form className="email-container" ref={form} onSubmit={sendEmail}>
          <input className="email-addr" type="email" name="user_email" placeholder='電郵'/>
          <input className="btn btn-info" type="submit" value="訂閱" />
        </form>
      </div>
  );
};