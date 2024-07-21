import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  // React.useEffect(() => {
  //   new LocomotiveScroll();
  // }, []);

  return (
    <main className="overflow-x-hidden scrollbar-thin ">
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
        <Blogs />
        <Footer/>
      </UpdateFollower>
    </main>
  );
}

export default App;
