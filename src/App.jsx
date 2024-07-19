import { UpdateFollower } from "react-mouse-follower";
import "./App.css";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower 
      mouseOptions={{
        backgroundColor:"white",
        zIndex:999,
        followSpeed:1.5,
        // scale:2
      }}
      >
        <Navbar />
      </UpdateFollower>
    </main>
  );
}

export default App;
