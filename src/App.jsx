import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";

function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
          // scale:2
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Services />
        <Banner />
        <BannerText />
      </UpdateFollower>
    </main>
  );
}

export default App;
