import AboutMe from "@/components/AboutMe/AboutMe";
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
    </div>
  );
}
