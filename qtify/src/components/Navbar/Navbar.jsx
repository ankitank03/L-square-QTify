import React from 'react'
import FeedbackButton from '../FeedbackButton/FeedbackButton'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from "./Navbar.module.css"

function Navbar() {
  return (

    <div className={styles.navbar}>
      
      <Logo/>
      <div>
      <SearchBar/>
      </div>

      <FeedbackButton>Give Feedback</FeedbackButton>
      

      </div>
  )
}

export default Navbar