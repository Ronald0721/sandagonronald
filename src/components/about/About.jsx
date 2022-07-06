import React from 'react';
import "./about.css";
import AboutProfile from "../../assets/master_yi-removebg-preview.png";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupIcon from '@mui/icons-material/Group';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutProfile} alt="about-profile" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <MilitaryTechIcon className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Months Working</small>
          </article>
          <article className="about__card">
            <GroupIcon className="about__icon" />
            <h5>Clients</h5>
            <small>0 Worldwide</small>
          </article>
          <article className="about__card">
            <FolderSpecialIcon className="about__icon" />
            <h5>Projects</h5>
            <small>3+ Completed Projects</small>
          </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores vel, expedita commodi nostrum nulla assumenda! Earum omnis, natus ullam dolor, veritatis eos, quis voluptas id vero odit sunt maxime!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About