import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="border-t-[2px] border-white-700 mt-10 flex flex-col items-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="mt-10">
          <span className="text-4xl mt-10 text-blue-400 font-bold md:text-5xl">
            About
          </span>
        </div>
        <div className="flex md:w-[80%] flex-col items-center md:flex-row">
          <div className="mt-10 md:mr-10 md:mb-10">
            <div className="w-[200px]">
              <img src="src/assets/ava.jpg" alt="" className="rounded-full" />
            </div>
          </div>
          <div>
            <p className="text-14 my-8 font-semibold text-center md:text-start md:text-16">
              I'm a senior student majoring in Software Engineering. I started
              learning programming when I began university in 2021.
              <br />
              <br />
              I know JavaScript and ReactJS, so I am strong in Frontend
              development. I also want to develop Backend NodeJS skills to
              become a Fullstack developer.
              <br />
              <br />
              Besides programming, I enjoy listening to music, playing games,
              badminton, grabbing coffee, and traveling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
