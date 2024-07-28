import Image from "next/image";
import Hero from "./components/main/Hero";
import Encryption from "./components/main/Encryption";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Project";
import Contact from "./components/main/Contact";
import About from "./components/main/About"
export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col h-[-850px] gap-20"></div>
        <Hero />
    <Skills />
    <Encryption />
    <Projects />
    
   </main>
  );
}
