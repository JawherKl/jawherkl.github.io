/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './testimonial.css';
import { Data } from './Data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  return (
    <section className='testimonial container section' id='testimonials'>
      <h2 className='section__title'>My Colleagues Say</h2>
      <span className='section__subtitle'>Testimonial</span>

      <div className='testimonial__carousel'>
        <button className='carousel__button carousel__button--prev' onClick={prevTestimonial}>
          &lt;
        </button>
        <div className='testimonial__card'>
          <img src={Data[currentIndex].image} alt='' className='testimonial__img' />
          <h3 className='testimonial__name'>{Data[currentIndex].title}</h3>
          <p className='testimonial__description'>{Data[currentIndex].description}</p>
        </div>
        <button className='carousel__button carousel__button--next' onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;