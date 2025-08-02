import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails/>
        <About/>
        <Art/>
    </main>
  );
};

export default App;
