import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProjectMobile } from "@/components/project-mobile";
import { ProjectDesktopThumbnailLeft } from "@/components/project-desktop-thumbnail-left";
import { ProjectDesktopThumbnailRight } from "@/components/project-desktop-thumbnail-right";
import { ProjectDesktopList } from "@/components/project-desktop-list";
import { useRouter } from "next/router";
import { projectsData } from "../components/project-data";
import { useEffect } from "react";

export type ButtonFilterType = "all" | "development" | "design";

export interface ProjectType {
  title: string;
  year: number;
  description: string;
  type: ButtonFilterType | ButtonFilterType[]; // เปลี่ยน type เป็นรองรับทั้ง string เดียวหรือ array ของ ButtonType
  content: string;
  image: string;
  path: string;
  linkUrl: string;
  linkGithub: string;
}

export default function WorkIndex() {
  const [activeButton, setActiveButton] =
    useState<ButtonFilterType>("development");
  const [renderingListProject, setRenderingListProject] =
    useState<boolean>(true);
  const router = useRouter();
  // ข้อมูลโปรเจกต์

  // จำนวนโปรเจกต์แต่ละชนิด
  const countByType: Record<ButtonFilterType, number> = {
    all: projectsData.length,
    development: projectsData.filter(
      (p) =>
        p.type === "development" ||
        (Array.isArray(p.type) && p.type.includes("development"))
    ).length,
    design: projectsData.filter(
      (p) =>
        p.type === "design" ||
        (Array.isArray(p.type) && p.type.includes("design"))
    ).length,
  };

  // กรองโปรเจกต์ตามปุ่มที่เลือก
  const filteredProjects =
    activeButton === "all"
      ? projectsData // ถ้าเลือก All ก็ให้แสดงโปรเจกต์ทั้งหมด
      : projectsData.filter((project) =>
          Array.isArray(project.type)
            ? project.type.includes(activeButton)
            : project.type === activeButton
        );

  useEffect(() => {}, [activeButton]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black">
        <Navbar />
        <main className="w-full max-w-[1140px mt-[140px] lg:mt-[250px] flex flex-col items-center px-4 lg:px-20 mb-40 lg:max-w-[1200px]  lg:mb-[200px] ">
          {/* div head title */}
          <section className="flex md:pl-0  flex-col gap-20 mb-5 lg:mb-10 w-full max-w-[458px] lg:max-w-full lg:w-[958px] ">
            <div className="flex flex-col gap-5 lg:min-w-[569px] ">
              <h1 className=" flex text-[clamp(32px,_5vw,_72px)] text-inria text-[#3C33E6]">
                Intend to creating <br className="" /> digital products
              </h1>
              <h1 className=" text-xs  w-full lg:max-w-[880px] lg:text-base font-light">
                A Full Stack Developer base in Bangkok with a Bachelor&apos;s
                degree in Industrial Design from King Mongkut&apos;s Institute
                of Technology Ladkrabang. My background in usability and design
                helps me understand functional, user-friendly solutions. I am
                passion about building intuitive websites and and exploring new
                technologies to enhance my skills.
              </h1>
              <span className="flex gap-10 text-xs font-medium  lg:text-base ">
                <button
                  className="hover:scale-105 hover:text-[#3C33E6] transform origin-left transition-all duration-300"
                  onClick={() => router.push("/about")}
                >
                  About / CV →
                </button>
                <button
                  className="hover:scale-105 hover:text-[#3C33E6] transform origin-left transition-all duration-300"
                  onClick={() => router.push("/contact")}
                >
                  Get in Touch →
                </button>
              </span>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row gap-2 lg:gap-3 ">
                {["Development", "Design"].map((button) => (
                  <button
                    key={button}
                    className={`py-3 px-6 lg:text-2xl lg:font-light lg:px-8 rounded-full border duration-300 relative ${
                      activeButton === button.toLowerCase() // ใช้ toLowerCase() เพื่อเปรียบเทียบให้ตรงกับค่าใน activeButton
                        ? "bg-black text-white border-black cursor-pointer"
                        : "border-[#AFAFAF] hover:bg-[#3C33E6] hover:border-[#3C33E6] hover:text-white cursor-pointer "
                    }`}
                    onClick={() =>
                      setActiveButton(button.toLowerCase() as ButtonFilterType)
                    } // ใช้ toLowerCase() ที่นี่ด้วย
                  >
                    {button}
                    {/* ตัวเลขเล็กๆ บนหัวปุ่ม */}
                    {button === "Development" && (
                      <span className="absolute top-2 right-[14px] lg:right-[22px] text-xs flex">
                        {countByType["development"]}
                      </span>
                    )}
                    {button === "Design" && (
                      <span className="absolute top-2 right-4 lg:right-6 text-xs flex">
                        {countByType["design"]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {/* button project list */}
              <div className="hidden lg:flex flex-row gap-3 ">
                <button
                  className={`w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center gap-2 duration-300 transition-colors group ${
                    renderingListProject
                      ? "bg-white border border-[#AFAFAF] hover:border-[#3C33E6] hover:bg-[#3C33E6]"
                      : "bg-black border-[black]"
                  }`}
                  onClick={() => setRenderingListProject(false)} // เปลี่ยนสถานะแบบ toggle
                >
                  {renderingListProject ? (
                    <>
                      <div className="w-8 h-[2px] bg-black group-hover:bg-white transition-colors"></div>
                      <div className="w-8 h-[2px] bg-black group-hover:bg-white transition-colors"></div>
                      <div className="w-8 h-[2px] bg-black group-hover:bg-white transition-colors"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-[2px] bg-white"></div>
                      <div className="w-8 h-[2px] bg-white"></div>
                      <div className="w-8 h-[2px] bg-white"></div>
                    </>
                  )}
                </button>

                {/* button project thumbnails */}
                <button
                  className={`w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center gap-1 duration-300 transition-colors group ${
                    renderingListProject
                      ? "bg-black border-black"
                      : "bg-white hover:bg-[#3C33E6] hover:border-[#3C33E6] border border-[#AFAFAF]"
                  }`}
                  onClick={() => setRenderingListProject(true)} // เปลี่ยนจาก true เป็น toggle state
                >
                  {renderingListProject ? (
                    <>
                      <div className="flex flex-row gap-1">
                        <div className="w-5 h-5 border-[2px] border-white"></div>
                      </div>
                      {/* <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                      </div> */}
                    </>
                  ) : (
                    <>
                      <div className="flex flex-row gap-1">
                        <div className="w-5 h-5 border-[2px] border-black group-hover:border-white transition-colors"></div>
                      </div>
                      {/* <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                      </div> */}
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>
          <section>
            {/* project for mobile */}
            <div className="lg:hidden w-full ">
              {filteredProjects.map((project, index) => (
                <ProjectMobile
                  key={index}
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  image={project.image}
                  path={project.path}
                />
              ))}
            </div>

            {/* project for desktop thumbnail */}
            {renderingListProject && (
              <div className="hidden lg:flex flex-col w-full ">
                {filteredProjects.map((project, index) => (
                  <div key={index}>
                    {index % 4 === 0 || index % 4 === 1 ? (
                      <ProjectDesktopThumbnailRight
                        title={project.title}
                        year={project.year}
                        description={project.description}
                        content={project.content}
                        image={project.image}
                        path={project.path}
                        linkUrl={project.linkUrl}
                        techstack={project.techStack}
                      />
                    ) : (
                      <ProjectDesktopThumbnailLeft
                        title={project.title}
                        year={project.year}
                        description={project.description}
                        content={project.content}
                        image={project.image}
                        path={project.path}
                        linkUrl={project.linkUrl}
                        techStack={project.techStack}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* project for desktop list */}
            {!renderingListProject && (
              <div className="hidden lg:flex flex-col">
                <div className="flex justify-start text-xs">
                  <div className="pl-9 text-[#AFAFAF] mt-3 mb-2">PROJECT</div>
                  <div className="pl-[221px] text-[#AFAFAF] mt-3 mb-2 mr-[242px]">
                    DESCRIPTION
                  </div>
                  <div className=" text-[#AFAFAF] mt-3 mb-2">YEAR</div>
                </div>
                {filteredProjects.map((project, index) => (
                  <ProjectDesktopList
                    key={index}
                    title={project.title}
                    year={project.year}
                    description={project.description}
                    image={project.image}
                    path={project.path}
                    techStack={project.techStack}
                  />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
