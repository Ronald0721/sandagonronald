import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/project1.webp";
import IMG2 from "../../assets/project2.webp";
import IMG3 from "../../assets/project3.webp";
import IMG4 from "../../assets/project4.webp";
import IMG5 from "../../assets/project5.webp";
import IMG6 from "../../assets/project6.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Meby - Meditation Mobile App",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18634714-Meby-Meditation-Mobile-App"
  },
  {
    id: 2,
    image: IMG2,
    title: "Spiritual Retreats Web",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18631366-Spiritual-Retreats-Web"
  },
  {
    id: 3,
    image: IMG3,
    title: "Movie App",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18632188-Movie-App"
  },
  {
    id: 4,
    image: IMG4,
    title: "Real-Time Feedback App",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18628877-Real-Time-Feedback-App"
  },
  {
    id: 5,
    image: IMG5,
    title: "Investment App UI Kit",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18636090-Investment-App-UI-Kit"
  },
  {
    id: 6,
    image: IMG6,
    title: "GoLive - Streaming App",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18627261-GoLive-Streaming-App"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio