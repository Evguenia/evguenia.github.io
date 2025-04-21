import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Form.css";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_km83o3e",
        "template_kf4t5tb",
        form.current,
        "BYeGlB_LO5THCZJut"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text); // On success
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text); // On failure
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="container form-wrapper" data-aos="flip-left">
      <form ref={form} onSubmit={sendEmail}>
        <div class="htmlForm">
          <div class="title karla gradient-text">Let's Connect!</div>
          <div class="input-container ic1">
            <input class="input" type="text" placeholder=" " name="full_name" />
            <div class="cut"></div>
            <label htmlFor="firstname" class="placeholder inconsolata">
              Senders Name
            </label>
          </div>

          <div class="input-container ic2">
            <input
              class="input"
              type="email"
              placeholder=" "
              name="user_email"
            />
            <div class="cut"></div>
            <label htmlFor="firstname" class="placeholder inconsolata">
              Sender's Email
            </label>
          </div>

          <div class="input-container ic2 inconsolata">
            <textarea
              class="input-textarea"
              placeholder="Message"
              cols="30"
              rows="10"
              name="message"
            />
            <div class="cut"></div>
          </div>
          <button type="text" class="submit karla">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
