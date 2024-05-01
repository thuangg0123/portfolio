import React from "react";

function MyResume() {
  return (
    <div
      className="font-bold mt-[9em] text-center"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="md:flex md:justify-center md:items-center">
        <div className="md:flex md:flex-col">
          <div className="text-[34px] md:text-[42px]">Hello,</div>
          <div className="text-[34px] md:text-[42px]">
            I'm&nbsp;
            <span className="text-[34px] mt-10 text-[#BAD2FF] font-bold md:text-[42px]">
              Ngoc Thuan
            </span>
          </div>
        </div>
      </div>
      <div className="text-[14px] mt-3 md:text-2xl">Software Engineer</div>
      <div className="flex justify-center mt-10">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1M8ZAlAwffBP0KH_Sf2GjdPR7WYLET2Rv/view?usp=sharing"
          className="text-black bg-[#BAD2FF] p-2 rounded-[8px] cursor-pointer hover:bg-[#25344e] hover:text-white transition-all duration-300 md:text-xl"
        >
          My resume
        </a>
      </div>
    </div>
  );
}

export default MyResume;
