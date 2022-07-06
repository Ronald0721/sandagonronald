import React from 'react';
import "./experience.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skilss I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>React</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

{/* END OF FRONT-END */}

        <div className="experience_backend">
        <h3>Back-end Development</h3>
        <div className="experience__content">
        <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article><article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
              <small className="text-light">Zero Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
              <small className="text-light">Zero Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
              <small className="text-light">Zero Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <CheckCircleIcon className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience