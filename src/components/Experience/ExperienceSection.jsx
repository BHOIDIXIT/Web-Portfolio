import React from "react";
import ExperienceCard from "./ExperienceCard";
import Google from "../../assets/image/Google logo.png";
import Apple from "../../assets/image/Apple logo.png";
import Meta from "../../assets/image/Meta logo.png";

export default function ExperienceSection() {
  const experienceCard = [
    {
      company: "Google",
      role: "Lead Software Engineer at Google",
      duration: "Nov 2019 - Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      logo: Google,
    },
    {
      company: "Apple",
      role: "Junior Software Engineer at Apple",
      duration: "Jan 2016 - Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      logo: Apple,
    },
    {
      company: "Meta",
      role: "Software Engineer at Meta",
      duration: "Jan 2017 - Oct 2019",
      description:
        "At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      logo: Meta,
    },
  ];
  return (
    <section id="experience" className="Background py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center">
        <h1 className="experience-gradient font-[1000] text-3xl text-center mb-8">Experience</h1>

        <div className="w-full">
          {experienceCard.map((card, index) => {
            return <ExperienceCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}
