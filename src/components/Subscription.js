import React, { useRef, useState, useEffect } from "react";
import "../styles/subscription.css";

// email = "wbsoftware_01@hotmail.com"
// password = "1a23456678@"
// elasticEmail = "wbsoftware_01@hotmail.com"
// elasticPassword = "1a23456678@"

// The service is temporary unavilable because the service provider cancel its free trial plan.

// Username: wbsoftware_01@hotmail.com
// Password: C21C4E64F1AB7400CFBA332C0E094BFADA8F
// smtp.elasticemail.com
// 2525
// Your security token is a123fd77-5910-4e29-8e54-1213b417109c Please take note of this.

export const Subscription = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const input = document.getElementsByClassName("email-addr")[0];
    const subs_btn = document.getElementsByClassName("subs-btn")[0];
    subs_btn.disabled = true;

    if (input.value === "") {
      input.classList.add("error");
      input.value = "請輸入電郵";
      subs_btn.disabled = false;
    } else {
      window.Email.send({
        SecureToken: "a123fd77-5910-4e29-8e54-1213b417109c",
        To: input.value,
        From: "wbsoftware_01@hotmail.com",
        Subject: "恭喜您! 已成功訂閱World's Bole電子報!",
        Body: "恭喜您! 已成功訂閱World's Bole電子報!",
        Attachments: [
          {
            name: "leaflet.webp",
            path: "https://i.ibb.co/PZYn7Kj/Leaflet.webp",
          },
        ],
      }).then(() => {
        setDisplayAlert(true);
        input.value = "";
      });
    }
  };

  useEffect(() => {
    if (displayAlert) {
      setTimeout(() => {
        setDisplayAlert(false);
        if (document.getElementsByClassName("subs-btn").length === 0) {
          document.getElementsByClassName("subs-btn")[0].disabled = false;
        }
        if (document.getElementsByClassName("email-addr").length === 0) {
          document
            .getElementsByClassName("email-addr")[0]
            .classList.remove("error");
        }
      }, 5000);
    }
  }, [displayAlert]);

  return (
    <div className="subscribe-container">
      <h3 className="subs-title">不要錯過任何最新資訊</h3>
      <p className="subs-info">立即訂閱，獲取最新消息。</p>
      <form className="email-container" ref={form} onSubmit={sendEmail}>
        <input
          className="email-addr"
          type="email"
          name="user_email"
          placeholder="電郵"
        />
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
