import React from 'react'
import LogoImage from "../../assets/logo.png"

function Logo() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={LogoImage} alt="logo" width={67} height={34}/>
    </div>
  )
}

export default Logo