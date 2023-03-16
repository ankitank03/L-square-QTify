import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./CarouselRightNavigation.module.css";
import RightNavigationButton from "../../../assets/RightNavigationButton.svg"

function CarouselRightNavigationButton() {
    const swiper=useSwiper();
    const handleLeftNavigation=()=>{
        swiper.slideNext();
    }
  return (
    <div
    onClick={handleLeftNavigation} 
    className={styles.wrapper}
    >
        <img src={RightNavigationButton} alt="RightNavigationButton"  />
    </div>
  )
  
}

export default CarouselRightNavigationButton