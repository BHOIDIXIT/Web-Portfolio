import React from "react";
import ProjectCard from "./ProjectCard";
import thumbnail1 from "../../assets/image/project-thumbnail-1.png";
import thumbnail2 from "../../assets/image/project-thumbnail-2.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "HTML Tutorial",
      image: thumbnail1,
    },
    {
      title: "CSS Tutorial",
      image: thumbnail2,
    },
  ];
  return (
    <>
      <section id="projects" className="Background  text-center text-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8  flex flex-col justify-center items-center">
       
        <h1 className="Projects-gradient font-[1000] text-3xl text-center">
          PROJECTS
        </h1>
        <div className="flex flex-wrap items-center justify-center mt-8 gap-8">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
        </div>
      </section>
    </>
  );
}
