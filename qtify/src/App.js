import { useEffect } from "react";
import { fetchTopSongs } from "./components/api/api";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Album from "./assets/Album.png"
import Section from "./components/Section/Section";


function App() {
  useEffect(() => {
    const datasource=fetchTopSongs()
  }, [])
  
  return (
    <>

    <Navbar/>
    <Hero/>
    <Card image={Album}
          follows={"100 Follows"}
          title="New Love"
          />
    </>
  );
}

export default App;
