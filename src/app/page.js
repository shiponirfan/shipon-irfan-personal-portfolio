import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education/>
      <Contact/>
    </div>
  );
}
