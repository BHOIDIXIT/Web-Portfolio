import React from "react";
import HeroButtons from "./HeroButtons"
export default function HeroSection() {
  return (
    <>
      <section className="Hero Background text-white  py-18">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8  flex flex-col justify-center items-center">
        <div>
          <img
            className="w-40"
            src="src\assets\image\avatar.png"
            alt="avtar image"
          />
        </div>
        <div className="hero_title mt-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold">
            I do code and <br />
            make content <span className="text-gradient">about it!</span>
          </h1>
        </div>
        <div className="description mt-8">
          <p className="text-center text-mauve-600 text-sm md:text-base">
            I am a seasoned full-stack software engineer with over <br /> 8 years of
            professional experience, specializing in backend development. <br /> My
            expertise lies in crafting robust and scalable SaaS-based <br />
            architectures on the Amazon AWS platform.
          </p>
        </div>
        <HeroButtons/>
        </div>
      </section>
    </>
  );
}
