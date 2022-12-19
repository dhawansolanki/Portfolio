import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from '@formspree/react';

import { themeContext } from "../../Context";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () => toast("Thanks for Contacting Me!");

  const [state, handleSubmit] = useForm("xyyagwea");
  if (state.succeeded) {
    notify()
    alert("Thanks for Contacting me. Will get back to you shortly.")
      return (
        <div></div>)
      // <p>Thanks for joining!</p>);
  }

  return (
    <div className="contact-form" id="contact">
      <div></div>
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="user_name" className="user"  placeholder="Name" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
