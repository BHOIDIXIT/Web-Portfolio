import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function ProjectCard({ title, image }) {
  return (
    <>
      <article className="card w-[400px] h-[300]">
          <img src={image} alt=""  className="w-full" srcset="" />
        <div className="card-body flex justify-between  text-start px-5  py-2 Primary rounded-b-3xl">
          <div className="card-content">
            <p className="text-xs">CLICK HERE TO VISIT</p>
            <h2 className="font-bold text-xl">{title}</h2>
          </div>
          <div>
            <ArrowUpRight size={40} />
          </div>
        </div>
      </article>
    </>
  );
}
