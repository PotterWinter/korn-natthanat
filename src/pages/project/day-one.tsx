import { Navbar } from "@/components/navbar";
import { projects } from "@/components/project-data";
import { usePrismHighlight } from "@/components/usePrismHighlight.ts";
import { ProjectSection101 } from "@/components/project-section101";
import { ProjectSection102 } from "@/components/project-section102";

export default function HomeServiceProject({}) {
  usePrismHighlight();
  const project = projects.filter(
    (project) => project.title === "day one"
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
              {/* head */}
              <ProjectSection101
                title={project.title}
                content={project.content}
                techStack={project.techStack}
                responsibility={project.responsibility}
                description={project.description}
                year={project.year}
              />
              <ProjectSection102
                linkGitHub={project.linkGitHub}
                linkUrl={project.linkUrl}
                linkBahance={project.linkBahance}
              />

              <section className="flex flex-col mt-20 gap-12">
                <div className="flex flex-col gap-3">
                  <img
                    src={project.image}
                    alt={project.image}
                    className="border-[1px] border-[#AFAFAF]"
                  />
                  <h1 className="text-xs font-light bg-black">
                    Final project form tech up full stack bootcamp 5 person in 8
                    week almost is about all of admin page, login user and login
                    admin for all frontend and half of backend you can follow my
                    duty form this path
                  </h1>
                </div>
                <div className=" flex flex-col gap-1">
                  <div className="code-box text-white w-full text-sm lg:text-base">
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
                  <h1 className="text-xs font-light bg-black">
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
