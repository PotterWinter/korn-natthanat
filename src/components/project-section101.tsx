import React from "react";

interface ProjectSection101Props {
  title: string;
  content:string;
  techStack: string;
  responsibility:string
  description: string;
  year: number;
}

export function ProjectSection101({
    title,
    content,
    techStack,
    responsibility,
    description,
    year,
}: ProjectSection101Props) {
  return (
    <>
      <h1 className="text-[clamp(32px,_5vw,_72px)] text-inria lg:-mb-10">
        {title}
      </h1>
      <h1 className="font-light text-sm lg:text-base w-full lg:max-w-[880px]">
        {content}
      </h1>
      <section className="flex flex-col gap-5 lg:gap-8 mt-12 lg:mt-0">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h1 className=" font-medium">TECH STACK</h1>
          <h1 className="text-xs lg:text-sm font-light">{techStack}</h1>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <h1 className="font-medium">RESPONSIBILITY</h1>
          <h1 className="text-xs lg:text-sm font-light lg:max-w-[880px]">
            {responsibility.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}
                <br />
              </React.Fragment>
            ))}
          </h1>
        </div>
        <div className=" flex flex-col gap-5 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-1 lg:gap-3">
            <h1 className="font-medium">DEESCRIPTION</h1>
            <h1 className="text-xs lg:text-sm font-light">
              {description}
            </h1>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3">
            <h1 className="font-medium">YEAR</h1>
            <h1 className="text-xs lg:text-sm font-light">{year}</h1>
          </div>
        </div>
      </section>
    </>
  );
}
