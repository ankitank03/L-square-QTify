import React from 'react'
 // import Swiper bundle with all modules installed
 import { Swiper, SwiperSlide } from 'swiper/react';
 import styles from "./Carousel.module.css";

 // Import Swiper styles
 import 'swiper/css';
import CarouselLeftNavigationButton from './CarouselLeftNavigationButton/CarouselLeftNavigationButton';
import CarouselRightNavigationButton from './CarouselRightNavigationButton/CarouselRightNavigationButton';

 // init Swiper:
 

function Carousel({data,renderComponent}) {
  return (
    <>
    <Swiper
        className={styles.swiper}
      spaceBetween={30}
      slidesPerView={"auto"}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
        
        <CarouselLeftNavigationButton/>
        {data.map((elem)=> 
        <SwiperSlide>
            {renderComponent(elem)}
        </SwiperSlide>)
        }            
        <CarouselRightNavigationButton/>
     </Swiper>
     </>
  )
}

export default Carousel