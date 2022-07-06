import React from 'react';
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#footer" className="footer__logo">Ronald A. Sandagon</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com"><FacebookIcon /></a>
        <a href="http://instagram.com"><InstagramIcon /></a>
        <a href="http://twitter.com"><TwitterIcon /></a>
      </div>

      <div className="footer__copyright">
        <small>{year} &copy; Ronald Sandagon. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer