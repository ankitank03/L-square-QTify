import React from 'react'
import styles from "./Hero.module.css"
import HeroImage from "../../assets/HeroImage.png";

function Hero({children}) {
  return (
    <div className={styles.hero}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h2>100 Thousand Songs Ad-Free</h2>
        <h2>Over Thousands  podcast episodes</h2>
        </div>
        <img src={HeroImage} alt="headphone" height={212} width={212}/>


    </div>
  )
}

export default Hero