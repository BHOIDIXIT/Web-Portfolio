import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "./components/Hero/HeroSection";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ContactSection from "./components/Contact/ContactSection";
export default function App() {
  return (
    <>
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <TechStack />
        <Project />
        <ExperienceSection />
        <ContactSection/>
      </main>
    </>
  );
}
