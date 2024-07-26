// SwiperComponent.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import bigFilms from './films';

const SwiperComponent = () => {
  const [hoveredFilm, setHoveredFilm] = useState(null);
  const navigate = useNavigate();

  const handleFilmHover = (film) => {
    setHoveredFilm(film);
  }

  const handleMouseLeave = () => {
    setHoveredFilm(null);
  }

  const handleClick = (film) => {
    navigate(film.link, { state: { film } });
  }

  return (
    <div className="container mt-8 flex flex-col justify-center items-center">
      <p className="text-2xl font-medium mb-4 text-center">Popular on Netflix</p>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5,
            centeredSlides: true,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
        }}
        style={{ width: '100%' }}
      >
        {bigFilms.map((film, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="relative p-4 flex items-center justify-center"
              style={{ width: "351px", height: "452px", overflow: 'hidden', margin: '10px' }}
              onMouseEnter={() => handleFilmHover(film)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(film)}
            >
              {hoveredFilm === film ? (
                <div className="absolute inset-0 bg-white text-black font-montserrat font-bold flex flex-col items-center justify-center h-full w-full">
                  <Link to={film.link} className="w-full h-full flex flex-col items-center justify-center">
                    <p className="flex items-center justify-center">{film.name}</p>
                  </Link>
                </div>
              ) : (
                <div className="w-full h-full">
                  <img src={film.poster} alt={`${film.name} Poster`} className="w-full h-full mb-2 font-bold transition-transform duration-600 rounded-md" />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
