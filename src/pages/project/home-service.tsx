import { Navbar } from "@/components/navbar";
import { projectsData } from "@/components/project-data";
import { ProjectSection101 } from "@/components/project-section101";
import { ProjectSection102 } from "@/components/project-section102";
import { ProjectSectionImage101 } from "@/components/project-section-image101";
// import { ProjectSectionCode101 } from "@/components/project-section-code101";
// import { ProjectSectionCode102 } from "@/components/project-section-code101";

export default function HomeServiceProject({}) {
  const project = projectsData.filter(
    (projects) => projects.title === "Home Service"
  );

  return (
    <>
      {project.map((project, index) => (
        <div
          key={index}
          className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black mb-20 "
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

              <section className="flex flex-col mt-20 gap-12 max-w-full">
                <ProjectSectionImage101
                  image={project.image}
                  content="Project Overview Main Features:
Booking various services such as cleaning, air conditioning repair, plumbing repair, etc. &&
Searching for services by name, price, and service type && Booking management && Administration system management && Member system and authentication && Payment system && Service status system"
                />
                {/* <ProjectSectionCode101
                  filepath={"Example code"}
                  coding={`<ProjectSection101
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
`}
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aspernatur nihil, in voluptates repellendus, earum laboriosam laborum consequuntur nobis facilis rerum dolorem iste reiciendis adipisci distinctio. Odit iste voluptatem, laborum numquam autem totam perspiciatis porro "
                /> */}
              </section>
            </div>
          </main>
        </div>
      ))}
    </>
  );
}


{/* <AdminSubmitPopUp
setShowPopUpSubmit={setShowPopUpSubmit}
showPopUpSubmit={showPopUpSubmit}
message="สร้างรายการสำเร็จ"
subMessage="กรุณากดยืนยันเพื่อกลับสู่หน้าหลัก ?"
confirmationText="ยืนยัน"
redirectPath="/adminservice"
/> */}