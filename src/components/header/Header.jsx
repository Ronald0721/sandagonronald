import React from 'react';
import "./header.css";
import CTA from "./CTA";
import Profile from "../../assets/Yi-removebg-preview.png"
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ronald A. Sandagon</h1>
        <h5 className="text-light">Front-End Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Profile} alt="profile-img" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header