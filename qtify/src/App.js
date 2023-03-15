import { useEffect } from "react";
import { fetchTopSongs } from "./components/api/api";
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
    
      <Section title="Top Albums" dataSource={fetchTopSongs}/>
    </>
  );
}

export default App;
