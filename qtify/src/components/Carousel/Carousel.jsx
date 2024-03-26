import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/swiper.css';
import RightButton from '../RightButton/RightButton'; 
import Card from '../Card/Card';

const Carousel = ({ albums }) => {
    const handleRightNavigation = () => {
        const swiper = document.querySelector('.swiper-container').swiper;
        swiper.slideNext(); // Navigate to the next slide
      };
    console.log(albums);
  return (
    <div>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={5}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      {albums.map(album => (
        <SwiperSlide key={album.id}>
          <Card album={album} />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
    <RightButton onClick={handleRightNavigation}/>
    </div>
  );
};

export default Carousel;
