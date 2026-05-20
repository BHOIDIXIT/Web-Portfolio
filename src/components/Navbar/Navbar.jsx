import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-black  text-white px-6  shadow-lg p-2 Primary ">
        <div className="flex m-auto max-w-7xl justify-around items-center">
          <img src="..\src\assets\image\logo.png" alt="" />

          <ul className="hidden md:flex gap-8 text-xl md:text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white "
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
        {mobileMenuIsOpen && (
          <div className=" md:hidden mt-4 text-center">
            <ul className="flex flex-col gap-4 text-xl md:text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
