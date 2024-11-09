import React from "react";
import themepattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

export const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={themepattern} alt="" />
        </div>

        <div className="contact-container">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>callmimidex@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>13, Ogunsola Avenue Isheri Oshun</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>+234 707 011 6131</p>
              </div>
            </div>
          </div>

          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message</label>
            <textarea
              name="message"
              rows={8}
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-button">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
