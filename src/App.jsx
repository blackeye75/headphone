import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

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
    </main>
  );
}

export default App;
