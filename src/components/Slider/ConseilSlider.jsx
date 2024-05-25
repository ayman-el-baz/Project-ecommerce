import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import interrupteur from '../assets/interrupteur.png'
import hashtag from '../assets/hashtag.png'
import climatiseur from '../assets/climatiseur.png'
import bois from '../assets/bois.png'

function ConseilSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // écran médium et plus petit
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container p-6" style={{ background: "none" }}>
      <style>{`
        .slider {
          background: none; 
        }
      `}</style>
      <div className="flex flex-col sm:flex-row justify-between m-4 items-center">
  <div className="flex space-x-3 sm:space-x-0 sm:mt-0">
    <div>
      <img src={hashtag} alt="" srcSet="" />
    </div>
    <div>
      <h1 className="text-xl sm:text-lg md:text-xl font-medium text-blue-900">Les conseils</h1>
      <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">VERONA SUD</h1>
    </div>
  </div>
  <div className="flex space-x-4 mt-4 sm:mt-0">
    <button onClick={goToPrev}>
      <svg className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
      </svg>
    </button>
    <button onClick={goToNext}>
      <svg className="w-20 h-20 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
      </svg>
    </button>
  </div>
</div>
      <Slider ref={sliderRef} {...settings} className="">
        <div className="px-8">
          <img src={interrupteur} alt="" srcSet="" />
          <p className="font-normal mt-3 text-xl sm:text-lg md:text-xl">Comment changer un interrupteur?</p>
        </div>
        <div className="px-8">
          <img src={climatiseur} alt="" srcSet="" />
          <p className="font-normal mt-3 text-xl sm:text-lg md:text-xl">Comment allumer une climatiseur?</p>
        </div>
        <div className="px-8">
          <img src={bois} alt="" srcSet="" />
          <p className="font-normal mt-3 text-xl sm:text-lg md:text-xl">Comment appliquer une peinture "effet bois" JAFEP?</p>
        </div>
        <div className="px-8">
          <img src={interrupteur} alt="" srcSet="" />
          <p className="font-normal mt-3 text-xl sm:text-lg md:text-xl">Comment changer un interrupteur?</p>
        </div>
        {/* Ajoutez plus de diapositives ici si nécessaire */}
      </Slider>
    </div>
  );
}

export default ConseilSlider;
