import React from 'react'
import styles from "./SearchBar.module.css"
import SearchIcon from "../../assets/Search icon.svg"


function SearchBar() {
  return (
    <div className={styles.div}>
        <input className={styles.searchBar} type="text" placeholder="search for your favorite songs" ></input>
        <button className={styles.button}><img className={styles.img} src={SearchIcon} alt="search" /></button>
    </div>
  )
}

export default SearchBar