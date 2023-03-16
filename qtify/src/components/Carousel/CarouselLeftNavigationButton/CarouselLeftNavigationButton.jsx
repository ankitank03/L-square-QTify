import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./CarouselLeftNavigation.module.css";
import LeftNavigationButton from "../../../assets/LeftNavigationButton.svg"
function CarouselLeftNavigationButton() {
    const swiper=useSwiper();
    const handleLeftNavigation=()=>{
        swiper.slidePrev();
    }
  return (
    <div
    onClick={handleLeftNavigation} 
    className={styles.wrapper}
    >
        <img src={LeftNavigationButton} alt="LeftNavigationButton"  />
    </div>
  )
}


export default CarouselLeftNavigationButton