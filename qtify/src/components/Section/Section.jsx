import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, dataSource }) {
    const [cards,setCards]=useState([]);
    //console.log(dataSource)
    useEffect(() => {
        dataSource().then((data)=>setCards(data))
    }, [])
    
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h5>{title}</h5>
        <h5 style={{ color: "var(--color-green)" }}>Show All</h5>
    </div>
        <div className={styles.gridContainer}>
            {cards.map((card)=>
                 <Card image={card.image}
                 follows={card.follows+" Follows"}
                 title={card.title}
                 key={card.id}
                 />

            )}
            </div>
           
          
      
    </div>
  );
}

export default Section;
