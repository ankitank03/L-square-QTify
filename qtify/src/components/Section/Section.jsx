import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, dataSource,type }) {
    const [cards,setCards]=useState([]);
    const[isShowAllClicked,setShowAll]=useState(false);
    //console.log(dataSource)
    useEffect(() => {
        dataSource().then((data)=>setCards(data))
    }, [])
    const handleShowAll=()=>{
        setShowAll((prevState)=>!prevState)
    }
  return (
    <div className={styles.sectionContainer}>
    
    {type === "album"?
    <>
         <div className={styles.sectionHeader}>
        <h5>{title}</h5>
        
       {!isShowAllClicked?<h5 onClick={handleShowAll} style={{ color: "var(--color-green)",cursor:"pointer"}}>Show All</h5>:
       <h5 onClick={handleShowAll} style={{ color: "var(--color-white)",cursor:"pointer"}}>Collapse</h5>} 
    </div>

        <div className={styles.gridContainer}>
            
            {isShowAllClicked?cards.map((card)=>
                 <Card image={card.image}
                 follows={card.follows+" Follows"}
                 title={card.title}
                 key={card.id}
                 />

            ):<Carousel 
            data={cards} 
            renderComponent={(data)=><Card image={data.image} follows={data.follows+" Follows"} title={data.title}/>}
            />}           
            </div>
    </>:
    <>
    <div className={styles.sectionSongsHeader}>
     <h5>{title}</h5> 
 </div>
     <div className={styles.gridContainer}>
            
   <Carousel 
     data={cards} 
     renderComponent={(data)=><Card image={data.image} follows={data.follows+" Likes"} title={data.title}/>}/>
        
    </div>
    </>
    
    }
</div>
  );
}

export default Section;
