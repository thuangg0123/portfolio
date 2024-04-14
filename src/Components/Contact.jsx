import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="border-t-[2px] border-white-700 mt-10 flex flex-col items-center"
        data-aos="fade-right"
      >
        <div className="mt-10">
          <span className="text-4xl mt-10 text-blue-400 font-bold md:text-5xl">
            Contact Me
          </span>
        </div>
        <div className="flex md:w-[80%] items-center md:flex-row justify-center text-[30px] gap-4 my-4">
          <div className="cursor-pointer p-1">
            <a target="__blank" href="https://www.facebook.com/noresponsez/">
              <FaFacebookF color="#BAD2FF" />
            </a>
          </div>
          <div className="cursor-pointer p-1">
            <a target="__blank" href="https://www.instagram.com/66__7883__105/">
              <FaInstagram color="#BAD2FF" />
            </a>
          </div>
          <div className="cursor-pointer p-1">
            <a target="__blank" href="https://github.com/thuangg0123">
              <FaGithub color="#BAD2FF" />
            </a>
          </div>
          <div className="cursor-pointer p-1">
            <a target="__blank" href="https://www.linkedin.com/in/thuangg0123/">
              <FaLinkedin color="#BAD2FF" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
