import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProjectMobile } from "@/components/project-mobile";
import { ProjectDesktopThumbnailLeft } from "@/components/project-desktop-thumbnail-left";
import { ProjectDesktopThumbnailRight } from "@/components/project-desktop-thumbnail-right";
import { ProjectDesktopList } from "@/components/project-desktop-list";

type ButtonType = "all" | "development" | "design";

interface Project {
  title: string;
  year: number;
  description: string;
  type: ButtonType | ButtonType[]; // เปลี่ยน type เป็นรองรับทั้ง string เดียวหรือ array ของ ButtonType
  content: string;
  image: string;
}

export default function WorkIndex() {
  const [activeButton, setActiveButton] = useState<ButtonType>("all");
  const [renderingListProject, setRenderingListProject] =
    useState<boolean>(true);

  // ข้อมูลโปรเจกต์
  const projects: Project[] = [
    {
      title: "Buddy Blog",
      year: 2025,
      description: "Design & Development",
      type: ["development", "design"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/buddy-blog/cover-buddy-blog.png",
    },

    {
      title: "Home Service",
      year: 2025,
      description: "Interaction & Development",
      type: "development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/home-service/cover-home-service.png",
    },
    {
      title: "Kathu",
      year: 2025,
      description: "Design & Branding",
      type: "design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/kathu/cover-kathu.png",
    },
    {
      title: "Chana",
      year: 2025,
      description: "Design & Branding",
      type: "design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/chana/cover-chana.png",
    },
    {
      title: "day one",
      year: 2025,
      description: "Design & Branding",
      type: "design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/day-one/cover-day-one.png",
    },
    {
      title: "Wattarin House",
      year: 2025,
      description: "Design & Branding",
      type: "design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
      image: "/image-project/wattarin-house/cover-wattarin-house.png",
    },
  ];

  // จำนวนโปรเจกต์แต่ละชนิด
  const countByType: Record<ButtonType, number> = {
    all: projects.length,
    development: projects.filter(
      (p) =>
        p.type === "development" ||
        (Array.isArray(p.type) && p.type.includes("development"))
    ).length,
    design: projects.filter(
      (p) =>
        p.type === "design" ||
        (Array.isArray(p.type) && p.type.includes("design"))
    ).length,
  };

  // กรองโปรเจกต์ตามปุ่มที่เลือก
  const filteredProjects =
    activeButton === "all"
      ? projects // ถ้าเลือก All ก็ให้แสดงโปรเจกต์ทั้งหมด
      : projects.filter((project) =>
          Array.isArray(project.type)
            ? project.type.includes(activeButton)
            : project.type === activeButton
        );

  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black">
        <Navbar />
        <main className="w-full max-w-[1140px mt-[140px] lg:mt-[250px] flex flex-col items-center px-4 mb-40 lg:max-w-[1440px] lg:pl-[244px] lg:ml-[40px] lg:pr-16 lg:mb-[200px]">
          {/* div head title */}
          <div className="flex lg:ml-9 flex-col gap-10 w-full lg:pr-20 ">
            <div className="text-[clamp(32px,_5vw,_60px)] lg:min-w-[569px] ">
              <h1 className="text-inria">
                <span className="text-[#3C33E6]">Intend</span> to creating
                <br />
                digital products
              </h1>
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row gap-2 lg:gap-3 ">
                {["All", "Development", "Design"].map((button) => (
                  <button
                    key={button}
                    className={`py-3 px-6 lg:text-2xl lg:font-light lg:px-8 rounded-full border duration-200 relative ${
                      activeButton === button.toLowerCase() // ใช้ toLowerCase() เพื่อเปรียบเทียบให้ตรงกับค่าใน activeButton
                        ? "bg-black text-white border-black cursor-pointer"
                        : "border-[#AFAFAF] hover:bg-black hover:text-white cursor-pointer"
                    }`}
                    onClick={() =>
                      setActiveButton(button.toLowerCase() as ButtonType)
                    } // ใช้ toLowerCase() ที่นี่ด้วย
                  >
                    {button}
                    {/* ตัวเลขเล็กๆ บนหัวปุ่ม */}
                    {button === "Development" && (
                      <span className="absolute top-2 right-3 lg:right-5 text-xs flex">
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
                  className={`w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center gap-2 duration-200 transition-colors group ${
                    renderingListProject
                      ? "bg-white border border-[#AFAFAF] hover:bg-black"
                      : "bg-black border-black"
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
                  className={`w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center gap-1 duration-200 transition-colors group ${
                    renderingListProject
                      ? "bg-black border-black"
                      : "bg-white hover:bg-black border border-[#AFAFAF]"
                  }`}
                  onClick={() => setRenderingListProject(true)} // เปลี่ยนจาก true เป็น toggle state
                >
                  {renderingListProject ? (
                    <>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                        <div className="w-2 h-2 border-[2px] border-white"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                        <div className="w-2 h-2 border-[2px] border-black group-hover:border-white transition-colors"></div>
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="h-10"></div>

          {/* project for mobile */}
          <div className="lg:hidden w-full">
            {filteredProjects.map((project, index) => (
              <ProjectMobile
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                image={project.image}
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
                    />
                  ) : (
                    <ProjectDesktopThumbnailLeft
                      title={project.title}
                      year={project.year}
                      description={project.description}
                      content={project.content}
                      image={project.image}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* project for desktop list */}
          {!renderingListProject && (
            <div className="hidden lg:flex flex-col w-full">
              <div className="flex justify-start text-xs">
                <div className="pl-9 text-[#AFAFAF] mt-3 mb-2">PROJECT</div>
                <div className="pl-[308px] text-[#AFAFAF] mt-3 mb-2 mr-auto">DESCRIPTION</div>
                <div className=" text-[#AFAFAF] mt-3 mb-2">YEAR</div>
              </div>
              {filteredProjects.map((project, index) => (
                <ProjectDesktopList
                  key={index}
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  content={project.content}
                  image={project.image}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
