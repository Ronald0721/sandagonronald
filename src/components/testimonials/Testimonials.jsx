import React from 'react';
import "./testimonials.css";
import AVTR1 from "../../assets/jinx av.jpg";
import AVTR2 from "../../assets/garen av.png";
import AVTR3 from "../../assets/yasou av.jpg";
import AVTR4 from "../../assets/zed av.webp";
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Jinx",
    testimony: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Garen",
    testimony: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Yasuo",
    testimony: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Zed",
    testimony: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Reviews from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
    {data.map(({id, image, name, testimony}) => {
      return (
        <SwiperSlide key={id} className="testimonials">
        <div className="client__avatar">
          <img src={image} alt="avatar"/>
        </div>
        <h5 className="client__name">{name}</h5>
        <small className="client__review">{testimony}</small>
      </SwiperSlide>
      )
    })}
    </Swiper>
    </section>
  )
}

export default Testimonials