import { useRouter } from "next/router";
import { useState } from "react";
// ประกาศ interface สำหรับ props
interface ProjectDesktopListProps {
  title: string;
  year: number;
  description: string;
  image: string;
  content: string;
  path: string;
}

export function ProjectDesktopList({
  title,
  year,
  description,
  content,
  path,
  image,
}: // image,
ProjectDesktopListProps) {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col w-full group cursor-pointer"
        onClick={() => router.push(path)}
      >
        <div className="flex w-full h-[1.5px] bg-[#3C33E6]"></div>
        <div className="flex flex-row justify-between items-start my-5 py-5 overflow-clip  relative">
          <div className="absolute left-9 top-0 h-full w-[260px]">
            <div className="h-full transition-all group-hover:translate-y-0 translate-y-full o duration-500">
              <img
                src={image}
                alt={title}
                className="flex h-full object-cover "
                onClick={() => router.push(path)}
              />
            </div>
          </div>
          <section className=" flex-grow w-[310px] flex flex-col">
            <h1 className="text-3xl pl-9 font-light transition-all group-hover:-translate-y-40 duration-500">{title}</h1>
          </section>
          <section className=" flex flex-col  justify-start w-[600px] gap-5 mt-1 relative ">
            <h1
              className="text-xl absolute -left-[2px] group-hover:text-[#3C33E6] transition-all duration-300 "
              style={{ transformOrigin: "left bottom" }}
            >
              {description}
            </h1>
            <h1 className="text-xs font-light mt-12">{content}</h1>
          </section>
          <h1 className="text-xl  mt-2">{year}</h1>
        </div>
      </div>
    </>
  );
}
