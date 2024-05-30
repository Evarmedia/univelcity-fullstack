import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: '#',
      name: 'Luna Brown',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: "As a fellow computer engineer, I've always been impressed by Mishak's innovative approach to problem-solving. Their ability to tackle complex coding challenges with ease is truly inspiring. I have learned a lot from our collaborations.",
    },
    {
      id: 2,
      link: '#',
      name: 'Arto Stone',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "I've had the pleasure of working alongside Mishak on web development projects, and I must say, their attention to detail is unmatched. Their expertise in web technologies always ensures that our projects are not only functional but also visually stunning.",
    },
    {
      id: 3,
      link: '#',
      name: 'Micheal Adebayo',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: "As a peer in the field of computer engineering, I have witnessed first-hand Mishak's exceptional problem-solving skills and their ability to think outside the box. Their creativity and passion for coding make them a valuable asset to any project.",
    },
    {
      id: 4,
      link: '#',
      name: 'Emily Rivers',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I can confidently say that Mishak is one of the most reliable and knowledgeable computer engineers I've had the pleasure of working with. Their dedication to staying up-to-date with the latest industry trends and technologies is truly commendable.",
    },
    {
      id: 5,
      link: '#',
      name: 'Shola Segun',
      role: 'Software Developer',
      test: "In the world of web development, Mosi is a name that commands respect. Their proficiency in a wide range of programming languages and their ability to consistently deliver high-quality work make them a standout professional in our industry.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials