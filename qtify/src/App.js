import { useEffect } from "react";
import { fetchNewSongs, fetchSongs, fetchTopSongs } from "./components/api/api";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Album from "./assets/Album.png"
import Section from "./components/Section/Section";


function App() {

  
  return (
    <>

    <Navbar/>
    <Hero/>
    
      <Section title="Top Albums" dataSource={fetchTopSongs} type="album"/>
      <Section title="New Albums" dataSource={fetchNewSongs} type="album"/>
      <Section title="Songs" dataSource={fetchSongs} type="songs"/>
    </>
  );
}

export default App;
