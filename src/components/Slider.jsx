import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./slider.css";

const Slider = ({imageSrc, title, subtitle, flipped}) => {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if(!flipped) {
      return (
        <>
          <img src={imageSrc} alt="" className='slider__image' />
          <div className='slider__content'>
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    }else {
      return (
        <>
          <div className='slider__content'>
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="" className='slider__image' />
        </>
      );
    }
  }

  return (
    <div className={inView ? 'slider slider--zoom' : 'slider'} ref={ref}>
      {renderContent()}
    </div>
  )
}

export default Slider