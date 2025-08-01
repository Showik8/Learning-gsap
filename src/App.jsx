import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails/>

    </main>
  );
};

export default App;
