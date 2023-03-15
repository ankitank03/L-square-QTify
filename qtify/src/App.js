import { useEffect } from "react";
import { fetchTopSongs } from "./components/api/api";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";


function App() {
  useEffect(() => {
    const datasource=fetchTopSongs()
  }, [])
  
  return (
    <>

    <Navbar/>
    {/* <Card/>
    <Section/>   */}
    </>
  );
}

export default App;
