import React from "react";

function Header() {
  const handleScrollById = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <nav>
        <ul className="flex flex-row justify-between font-bold md:text-2xl md:justify-center md:gap-10 md:bg-[#3B3B3B] md:rounded-lg md:p-4">
          <li className="cursor-pointer hover:text-[#BAD2FF] duration-300">
            <a href="#projects" onClick={() => handleScrollById("projects")}>
              Projects
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#BAD2FF] duration-300">
            <a href="#about" onClick={() => handleScrollById("about")}>
              About
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#BAD2FF] duration-300">
            <a href="#skills" onClick={() => handleScrollById("experience")}>
              Skills
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#BAD2FF] duration-300">
            <a href="#contact" onClick={() => handleScrollById("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
