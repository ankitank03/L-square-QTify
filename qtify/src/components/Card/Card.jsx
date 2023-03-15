import React from 'react'
import styles from "./Card.module.css"

function Card({image,follows,title}) {
  return (
    
    <div className={styles.card}>
        <div class={styles.cardBody}>
        <div className={styles.imageContainer}>
                <img src={image} alt="songImage" height={170} width={159}/>
            </div>
       
        
            <div style={{height:"35px",padding:"6px"}}>
                <div className={styles.followsContainer}>
                <h6>{follows}</h6> 
                </div>
                  
            </div>
       
        </div>
        <div style={{paddingTop:"6px"}}>
            <p>{title}</p>
        </div>
        
    </div>
  )
}

export default Card
