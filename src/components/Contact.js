import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const send = useRef();
  const [message, setMessage] = useState("");
  const [sent, setStat] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    send.current.disabled = true;
    setMessage("Sending..");
    console.log("clicked");
    if (sent) {
      console.log(1);
      setMessage("Already sent");
      return;
    }

    emailjs
      .sendForm(
        "service_ktbw179",
        "template_wwieyox",
        form.current,
        "yZ_VZLaH71rQmXybR"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            setStat(true);
          }
          setMessage("Sent! Thank you.");
          setTimeout(() => {
            setMessage("");
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          send.current.disabled = false;
          setMessage(
            "Uh oh! there is some error, please reload and try again."
          );
        }
      );
  };

  return (
    <section id="contact">
      <div className="proj-desc">
        <h3 data-aos="fade-up">Contact</h3>
        <div id="contact-cont">
          <form id="contact-mes" ref={form} onSubmit={sendEmail}>
            <h2>Send a message</h2>
            <label>
              From
              <input type="text" name="user_name" placeholder="name" required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="message" />
            </label>
            <label>
              Let me get back to you!
              <input
                type="email"
                name="reply_to"
                placeholder="email"
                required
              />
            </label>
            <button ref={send} type="submit">
              SEND
            </button>
            <span id="message-stat" style={{ opacity: message ? 1 : 0 }}>
              {message}
            </span>
          </form>
          <div>
            <h2>Or reach me via</h2>
            <p>Mobile:</p>
            <h4>+639955563312</h4>
            <br />
            <p>Email:</p>
            <h4>ralphmontilla0@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
