import { Navbar } from "@/components/navbar";
import { projects } from "@/components/project-data";

import { usePrismHighlight } from "@/components/usePrismHighlight.ts";

export default function HomeServiceProject() {
  usePrismHighlight();
  const project = projects.filter(
    (project) => project.title === "Home Service"
  );

  return (
    <>
      {project.map((project, index) => (
        <div
          key={index}
          className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black mb-20 "
        >
          <Navbar />
          <main className="flex justify-start lg:justify-center lg:max-w-[980px] mt-[140px] lg:mt-[250px] px-4 mb-40 w-full lg:w-full">
            <div className="flex flex-col gap-5 lg:gap-16 ">
              {/* div head title */}
              <h1 className="text-[clamp(32px,_5vw,_72px)] text-inria lg:-mb-10">
                {project.title}
              </h1>
              <h1 className="font-light text-sm lg:text-base w-full lg:max-w-[880px]">
                {project.content}
              </h1>
              <section className="flex flex-col gap-5 lg:gap-8 mt-12 lg:mt-0">
                <div className="flex flex-col gap-1 lg:gap-3">
                  <h1 className=" font-medium">TECH STACK</h1>
                  <h1 className="text-xs lg:text-sm font-light">
                    • HTML • CSS • JavaScript • React • Tailwind • TypeScript •
                    Node.js •
                  </h1>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <h1 className="font-medium">RESPONSIBILITY</h1>
                  <h1 className="text-xs lg:text-sm font-light">
                    Final project form tech up full stack bootcamp 5 person in 8
                    week almost is about all of admin page, login user and login
                    admin for all frontend and half of backend you can follow my
                    duty form this path <br />
                    <br /> • /admin/category • /admin/service •
                    /admin/adminpromotioncode • /admin/logout • /admin/login •
                    /login •
                  </h1>
                </div>
                <div className=" flex flex-col gap-5 lg:flex-row lg:gap-20">
                  <div className="flex flex-col gap-1 lg:gap-3">
                    <h1 className="font-medium">DEESCRIPTION</h1>
                    <h1 className="text-xs lg:text-sm font-light">
                      {project.description}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1 lg:gap-3">
                    <h1 className="font-medium">YEAR</h1>
                    <h1 className="text-xs lg:text-sm font-light">
                      {project.year}
                    </h1>
                  </div>
                </div>
              </section>
              <section className="relative -mt-1 lg:-mt-6">
                <div className="w-full h-[1.5px] bg-[#3C33E6] ">
                  <div className="top-0 -left-4  w-[1000px] h-[1.5px] bg-[#3C33E6] absolute lg:hidden"></div>
                </div>
                <div className="flex gap-3 lg:gap-9 absolute right-10 -top-10 lg:-top-20">
                  {project.linkGitHub && (
                    <button
                      onClick={() =>
                        window.open(`https://${project.linkGitHub}`, "_blank")
                      }
                      className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40  bg-[#3C33E6] rounded-full flex items-center justify-center text-white group "
                    >
                      <h1 className="lg:group-hover:scale-125 transition-all duration-300">
                        Git Hub
                      </h1>
                    </button>
                  )}
                  {project.linkUrl && (
                    <button
                      onClick={() =>
                        window.open(`https://${project.linkUrl}`, "_blank")
                      }
                      className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40  bg-[#3C33E6] rounded-full flex items-center justify-center text-white group"
                    >
                      <h1 className="lg:group-hover:scale-125 transition-all duration-300">
                        View Site
                      </h1>
                    </button>
                  )}
                  {project.linkBahance && (
                    <button
                      onClick={() =>
                        window.open(`https://${project.linkBahance}`, "_blank")
                      }
                      className="text-sm lg:text-base lg:font-light w-20 h-20 lg:w-40 lg:h-40 bg-[#3C33E6] rounded-full flex items-center justify-center text-white group"
                    >
                      <h1 className="lg:group-hover:scale-125 transition-all duration-300">
                        Behance
                      </h1>
                    </button>
                  )}
                </div>
              </section>
              <section className="flex flex-col mt-20 gap-12">
                <div className="flex flex-col gap-3">
                  <img
                    src={project.image}
                    alt={project.image}
                    className="border-[1px] border-[#AFAFAF]"
                  />
                  <h1 className="text-xs font-light">
                    Final project form tech up full stack bootcamp 5 person in 8
                    week almost is about all of admin page, login user and login
                    admin for all frontend and half of backend you can follow my
                    duty form this path
                  </h1>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className="code-box text-white w-full ">
                    <pre>
                      <code className="language-javascript">
                        {`
function greet(name) {
  return 'Hello, ' + name;
}
greet('World');
      `}
                      </code>
                    </pre>
                  </div>
                  <h1 className="text-xs font-light">
                    Final project form tech up full stack bootcamp 5 person in 8
                    week almost is about all of admin page, login user and login
                    admin for all frontend and half of backend you can follow my
                    duty form this path
                  </h1>
                </div>
              </section>
            </div>
          </main>
        </div>
      ))}
    </>
  );
}
