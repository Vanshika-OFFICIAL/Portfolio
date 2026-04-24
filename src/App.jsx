import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { useScroll, motion } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-[#07070f] text-white relative overflow-x-hidden">
      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 origin-left z-50"
      />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}