import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/subscription.css"

// email: kaikaiday@hotmail.com
// password: 1a23456678@
// Your security token is 16c1bebd-ee7d-48ea-b5fe-84ea8658adc9 Please take note of this.
// emailAPI: kaikaiday@hotmail.com
// password: 982D2AAADC56FC7B3ECB896467E9CEDC630B
// smtp.elasticemail.com
// port:2525

export const Subscription = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const input = document.getElementsByClassName("email-addr")[0]
    const subs_btn = document.getElementsByClassName("subs-btn")[0]
    subs_btn.disabled = true

    if(input.value === ''){
      input.classList.add("error")
      input.value = "請輸入電郵"
      subs_btn.disabled = false
    }else{
        window.Email.send({
          SecureToken : "16c1bebd-ee7d-48ea-b5fe-84ea8658adc9",
          To : input.value,
          From : "kaikaiday@hotmail.com",
          Subject : "恭喜您! 已成功訂閱World's Bole電子報!",
          Body : "恭喜您! 已成功訂閱World's Bole電子報!",
          Attachments : [
            {
              name : "leaflet.png",
              path : "https://i.ibb.co/PZYn7Kj/Leaflet.webp"
            }]
        }).then(
          () => {
            setDisplayAlert(true)
            input.value = ''
        })
      }
  };

  useEffect(() => {
    setTimeout(() => {
      setDisplayAlert(false)
      document.getElementsByClassName("subs-btn")[0].disabled = false
    }, 5000)
  }, [displayAlert]);

  return (
      <div className='subscribe-container'>
        <h3 className='subs-title'>不要錯過任何最新資訊</h3>
        <p className='subs-info'>立即訂閱，獲取最新消息。</p>
        <form className="email-container" ref={form} onSubmit={sendEmail}>
          <input className="email-addr" type="email" name="user_email" placeholder='電郵'/>
          <input className="subs-btn btn btn-info" type="submit" value="訂閱" />
        </form>

        {displayAlert && (
          <div className="alert alert-success success-msg " role="alert">
            已成功訂閱!
          </div>
        )}
      </div>
  );
};