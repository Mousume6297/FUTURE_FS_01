import React from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8rs8nvf",
      "template_cggvld5",
      e.target,
      "Jt_yY-gCvJE4yZVSC"
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      () => { 
        alert("Failed to send message. Try again.");
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
        I am currently seeking internship or entry-level opportunities as a
        Java / Software Developer. If you have any opportunities that match my
        profile, feel free to reach out.
      </p>

      <div className="contact-wrapper">

        {/* Contact Form */}

        <form onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>


        {/* Connect Section */}

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <a
            className="contact-link"
            href="mailto:mousumebarick@gmail.com"
          >
            <FaEnvelope /> mousumebarick@gmail.com
          </a>

          <a
            className="contact-link"
            href="https://www.linkedin.com/in/mousume-barick-2878ba303/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn Profile
          </a>

          <a
            className="contact-link"
            href="https://github.com/Mousume6297"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub Profile
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;