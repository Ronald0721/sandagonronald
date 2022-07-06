import React, {useRef} from 'react';
import "./contact.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i2c339m', 'template_o1jxqa7', form.current, '2XSJYPYkRPnPG6LyH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MailOutlineIcon className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>getatutorials</h5>
            <a href="mailto:sandagonronald@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <ChatBubbleIcon className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>sandagonronald@gmail.com</h5>
            <a href="http://m.me/sandagon.ronald.abarquez" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <PhoneInTalkIcon className="contact__option-icon"/>
            <h4>Viber</h4>
            <h5>+639057053176</h5>
            <a href="viber://contact?number=%2B639057053176" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact