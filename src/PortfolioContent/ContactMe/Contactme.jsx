import React, { useRef } from "react";
import "./contact.css";
import shaper from "../../Assets/Home/msg.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contactme = () => {
  const [state,setState] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_obs93q9', 'template_8dxo6kd', form.current, "ynmRzGeiRQKPN2r1z")
        .then((result) => {
            console.log(result.text);
            setState(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    AOS.init({ duration:2000})


  return (
    <div className="main" data-aos="fade-up">
      <div className="contact-parent">
        <div className="heading">
          <h1>Contact ME</h1>
        </div>
        <div className="section">
            <div className="IMG" data-aos="fade-up">
                <img src={shaper} alt="" />
            </div>
            <form className="input" ref={form} onSubmit={sendEmail}>
                <div className="inputBox">
                    <input className="freeform1" type="text" required="required" name="user_name" />
                    <span>First Name</span>
                </div>
                <div className="inputBox">
                    <input className="freeform1" type="text" required="required" name= "user_email" />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea className="freeform" autoFocus={false}  rows="2" cols="50" placeholder="Enter You Message" name="message"/>
                </div>
                    <button classsName="btnForhire" type="submit">
                        Send Message
                    </button>
            </form>
        </div>
          <div>
            <h3>{state ? "Thanks For Replying !": ""}</h3>
          </div>
      </div>
        
    </div>
  );
};

export default Contactme;
