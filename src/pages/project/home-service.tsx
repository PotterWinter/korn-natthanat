import { Navbar } from "@/components/navbar";
import { projectsData } from "@/components/project-data";
import { ProjectSection101 } from "@/components/project-section101";
import { ProjectSection102 } from "@/components/project-section102";
import { ProjectSectionImage101 } from "@/components/project-section-image101";
import { ProjectSectionCode101 } from "@/components/project-section-code101";
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
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aspernatur nihil, in voluptates repellendus, earum laboriosam laborum consequuntur nobis facilis rerum dolorem iste reiciendis adipisci distinctio. Odit iste voluptatem, laborum numquam autem totam perspiciatis porro "
                />
                <ProjectSectionCode101
                  filepath={"Example code"}
                  coding={`NEXT_PUBLIC_SUPABASE_URL=https://frqdeijtcguxcozmpucc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycWRlaWp0Y2d1eGNvem1wdWNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MDU2NTAsImV4cCI6MjA0ODA4MTY1MH0.n_58jHydpbhCZy7GMKe7SDGFElAGV2PRRYdY90ApoIA
SUPABASE_SERVICE_ROLE=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZycWRlaWp0Y2d1eGNvem1wdWNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjUwNTY1MCwiZXhwIjoyMDQ4MDgxNjUwfQ.59nU3An-xHzEJ7mGExwjzqIVhz90BsC790X_1DOqazI
CONNECTION_STRING="postgresql://postgres.frqdeijtcguxcozmpucc:vsUK6T86VBDOeIZS@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
SECRET_KEY=AORhemW+AQYarbMwnVoEF57I8PotgIJUl6WHs+qUQNhIM+LdFgbCCXmi4nrc/Bp5oxNt4Gf90XkRFjpdHhqX1A==
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51QV6WHIvN7RAky1NJlvbXvmZWx8VOhycCqPFBsM9jARIgvdJmYLi33fl95AWVq3oaoG6HxtOCHlv7L0GF96Ls7Sm00E79R5TpF
STRIPE_SECRET_KEY=sk_test_51QV6WHIvN7RAky1NxoFSnEJSBRJ2Q4YTSSVrAcLGNdFkCUaPFQFgunno9SVgeBkuYw4bIT8rVqfMWbu8IN0WS79c0078wBCfu4
NEXT_PUBLIC_API_URL=http://localhost:3000`}
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aspernatur nihil, in voluptates repellendus, earum laboriosam laborum consequuntur nobis facilis rerum dolorem iste reiciendis adipisci distinctio. Odit iste voluptatem, laborum numquam autem totam perspiciatis porro "
                />
                {/* <ProjectSectionCode102
                filepath01="abcabc"
                coding01={`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51QV6WHIvN7RAky1NJlvbXvmZWx8VOhycCqPFBsM9jARIgvdJmYLi33fl95AWVq3oaoG6HxtOCHlv7L0GF96Ls7Sm00E79R5TpF`}
                filepath02=""
                coding02={`
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51QV6WHIvN7RAky1NJlvbXvmZWx8VOhycCqPFBsM9jARIgvdJmYLi33fl95AWVq3oaoG6HxtOCHlv7L0GF96Ls7Sm00E79R5TpF
`}
                content=""/> */}
              </section>
            </div>
          </main>
        </div>
      ))}
    </>
  );
}
