import React from "react";

function CardProject({ project }) {
  const {
    img_project,
    name_project,
    language,
    description,
    url_github,
    isPending,
    video_demo,
  } = project;
  return (
    <>
      <div
        className="md:flex-[33%] md:items-center md:justify-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <a target="_blank" href={url_github}>
          <div className="mt-10 relative text-center bg-white text-black mx-[31px] rounded-xl cursor-pointer max-w-[450px] md:max-w-[500px] md:min-w-[300px] md:min-h-[630px] md:max-h-[890px]">
            <div>
              <img src={img_project} alt={name_project} />
            </div>
            <div className="flex text-start mx-4 flex-col">
              <p className="text-15 my-2 font-semibold text-center md:text-20 md:text-start">
                {name_project}
              </p>
              <div className="flex flex-wrap text-8 font-bold">
                {language.map((item) => (
                  <div
                    className="flex items-center mr-2 mb-2 bg-[#60A5FA] py-1 px-2 rounded-md"
                    key={item.id_tech}
                  >
                    <div>
                      <img
                        src={item.img_tech}
                        alt={item.name_tech}
                        className="w-[20px]"
                      />
                    </div>
                    <p className="ml-1 text-[11px] md:text-[14px]">
                      {item.name_tech}
                    </p>
                  </div>
                ))}
              </div>
              {isPending ? (
                <span className="text-[#DC3545] font-bold">Pending ....</span>
              ) : (
                ""
              )}
              <div className="md:text-base text-sm md:mb-0 mb-5">
                <span className="font-bold">Description</span>: {description}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default CardProject;
