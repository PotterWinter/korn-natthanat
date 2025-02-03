import React from "react";

interface ProjectSection102Props {
  linkGitHub: string;
  linkUrl: string;
  linkBahance: string;

}

export function ProjectSection102({
  linkGitHub,
  linkUrl,
  linkBahance,
}: ProjectSection102Props) {
  return (
    <>
      <section className="relative mt-1 lg:-mt-6">
        <div className="w-full h-[1.5px] bg-[#3C33E6] ">
          <div className="top-0 -left-4  w-screen h-[1.5px] bg-[#3C33E6] absolute lg:-left-[45px] lg:max-w-[1040px]"></div>
        </div>
        <div className="flex gap-3 lg:gap-9 absolute right-10 -top-10 lg:-top-20">
          {linkGitHub && (
            <button
              onClick={() =>
                window.open(`https://${linkGitHub}`, "_blank")
              }
              className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40  bg-[#3C33E6] rounded-full flex items-center justify-center text-white group "
            >
              <h1 className="md:group-hover:scale-125 transition-all duration-300">
                Git Hub
              </h1>
            </button>
          )}
          {linkUrl && (
            <button
              onClick={() =>
                window.open(`https://${linkUrl}`, "_blank")
              }
              className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40  bg-[#3C33E6] rounded-full flex items-center justify-center text-white group"
            >
              <h1 className="md:group-hover:scale-125 transition-all duration-300">
                View Site
              </h1>
            </button>
          )}
          {linkBahance && (
            <button
              onClick={() =>
                window.open(`https://${linkBahance}`, "_blank")
              }
              className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40 bg-[#3C33E6] rounded-full flex items-center justify-center text-white group"
            >
              <h1 className="md:group-hover:scale-125 transition-all duration-300">
                Behance
              </h1>
            </button>
          )}
        </div>
      </section>
    </>
  );
}
