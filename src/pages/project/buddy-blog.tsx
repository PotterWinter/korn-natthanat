import { Navbar } from "@/components/navbar";
import { projectsData } from "@/components/project-data";
import { ProjectSection101 } from "@/components/project-section101";
import { ProjectSection102 } from "@/components/project-section102";
import { ProjectSectionImage101 } from "@/components/project-section-image101";

export default function HomeServiceProject({}) {
  const project = projectsData.filter(
    (projects) => projects.title === "Buddy Blog"
  );

  return (
    <>
      {project.map((project, index) => (
        <div
          key={index}
          className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black pb-20 "
        >
          <Navbar />
          <main className="flex justify-start lg:justify-center max-w-[980px] mt-[140px] lg:mt-[250px] px-4 mb-40 w-full lg:w-full">
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
                <ProjectSectionImage101 image={project.image} content="" />
              </section>
            </div>
          </main>
        </div>
      ))}
    </>
  );
}
