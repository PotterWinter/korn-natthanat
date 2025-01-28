import { Navbar } from "@/components/navbar";


export default function AboutIndex() {
 
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black">
        <Navbar />
        <main className="flex justify-start lg:justify-center lg:max-w-[980px] mt-[140px] lg:mt-[250px] w-full px-4 mb-40 ">
          <div className="flex flex-col gap-5 lg:gap-16">
            {/* div head title */}
            <h1 className="text-[#3C33E6] text-[clamp(32px,_5vw,_72px)] text-inria lg:-mb-10">
              Natthanat <br className="" />
              Chuayriang
            </h1>
            <h1 className="font-light text-xs lg:text-base w-full lg:max-w-[880px]">
              A Full Stack Developer base in Bangkok with a Bachelor&apos;s
              degree in Industrial Design from King Mongkut&apos;s Institute of
              Technology Ladkrabang. My background in usability and design helps
              me understand functional, user-friendly solutions. I am passion
              about building intuitive websites and and exploring new
              technologies to enhance my skills.
            </h1>
            <div className="flex flex-col gap-8 lg:gap-12 mt-28 lg:mt-20">
              {/* div about me */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <h1 className="font-semibold lg:text-2xl">ABOUT ME</h1>
                <a
                  href="/resume/Resume.pdf"
                  target="_blank"
                  className=" hover:scale-105 hover:text-[#3C33E6] transform origin-left transition-all duration-200 text-sm lg:text-xl flex w-max"
                  style={{ transformOrigin: "left buttom" }}
                >
                  CURRICULUM VITAE (CV) →
                </a>
                <h1 className="font-light text-xs text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                  • Junior Full Stack Developer, I thrive on exploring new
                  challenges and continuously learning beyond my comfort zone to
                  expand my technical expertise.
                </h1>
              </div>
              <div className="w-full  h-[1.5px] bg-[#3C33E6] relative">
                <div className="w-full  h-[1.5px] bg-[#3C33E6] absolute lg:w-[948px]  lg:-left-[0px]  lg:bottom-0 hidden lg:flex"></div>
              </div>
              {/* div education */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <h1 className="font-semibold lg:text-2xl">EDUCATION</h1>
                <div className="">
                  <h1 className="text-sm lg:text-xl lg:mb-2">
                    Sep 2024 - Jan 2025
                  </h1>
                  <h1 className="font-light text-xs text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • Tech Up Full stack developer bootcamp
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm lg:text-xl lg:mb-2">
                    Jan 2018 - Jan 2022
                  </h1>
                  <h1 className="font-light text-xs text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • King Mongkut&apos;s Institute of Technology Ladkrabang
                    Bachelor&apos;s degree, Industrial and Product Design
                  </h1>
                </div>
              </div>
              <div className="w-full  h-[1.5px] bg-[#3C33E6]  relative">
                <div className="w-full  h-[1.5px] bg-[#3C33E6]  absolute lg:w-[948px] lg:-left-[0px]  lg:bottom-0 hidden lg:flex"></div>
              </div>
              {/* div skill */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <h1 className="font-semibold lg:text-2xl ">SKILL</h1>
                <div>
                  <h1 className="text-sm lg:text-xl lg:mb-2">My TechStack</h1>
                  <h1 className="font-light text-xs text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • HTML • CSS • JavaScript • React • Tailwind • TypeScript •
                    Node.js • Express.js • MongoDB • PostgresSQL • Next.js •
                    Supabase • Git • Github • Vercel • Figma •
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm lg:text-xl lg:mb-2">Interested</h1>
                  <h1 className="font-light text-xs text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    {" "}
                    • Go • Nuxt • Vue •
                  </h1>
                </div>
              </div>
              <div className="w-full  h-[1.5px] bg-[#3C33E6] relative">
                <div className="w-full  h-[1.5px] bg-[#3C33E6]  absolute lg:w-[948px]  lg:-left-[0px]  lg:bottom-0 hidden lg:flex"></div>
              </div>
              {/* div experience */}
              <div className="flex flex-col gap-3 lg:gap-8">
                <h1 className="font-semibold lg:text-2xl">EXPERIENCE</h1>
                {/* div for 1 choice */}
                <div className="">
                  <div className="flex flex-row w-full justify-start gap-5 lg:relative">
                    <h1 className="text-sm lg:text-xl lg:mb-2">
                      Branding Designer
                    </h1>
                    <h1 className="text-sm lg:text-xl lg:absolute lg:left-[250px]">
                      Freelance
                    </h1>
                  </div>
                  <h1 className="text-xs font-light text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • Aug 2023 - Jan 2024
                  </h1>
                  <h1 className="font-light hidden lg:flex lg:text-sm lg:max-w-[920px]">
                    • Freelance work after graduation, focusing on brand design,
                    including print graphics, brand identity, and growth
                    strategy.
                  </h1>
                </div>
                {/* div for 2 choice */}
                <div>
                  <div className="flex flex-row w-full justify-start gap-5 lg:relative">
                    <h1 className="text-sm lg:text-xl lg:mb-2">
                      Package Designer
                    </h1>
                    <h1 className="text-sm lg:text-xl lg:absolute lg:left-[250px]">
                      SCG
                    </h1>
                  </div>
                  <h1 className="text-xs font-light text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • Apr 2021 - Jul 2022
                  </h1>
                  <h1 className="font-light hidden lg:flex lg:text-sm lg:max-w-[920px]">
                    • Outsourced project with SCG, designing print materials for
                    large-scale production.
                  </h1>
                </div>
                {/* div for 3 choice */}
                <div>
                  <div className="flex flex-row w-full justify-start gap-5 lg:relative">
                    <h1 className="text-sm lg:text-xl lg:mb-2">
                      Product Designer
                    </h1>
                    <h1 className="text-sm lg:text-xl lg:absolute lg:left-[250px]">
                      Cor Design
                    </h1>
                  </div>
                  <h1 className="text-xs font-light text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • Jun 2021 - Jul 2021
                  </h1>
                  <h1 className="font-light hidden lg:flex lg:text-sm lg:max-w-[920px]">
                    • Junior-year internship in Product Design, creating
                    designs, drafting, and prototypes for industrial production.
                  </h1>
                </div>
                {/* div for 4 choice */}
                <div>
                  <div className="flex flex-row w-full justify-start gap-5 lg:relative">
                    <h1 className="text-sm lg:text-xl lg:mb-2">
                      Manufacturing
                    </h1>
                    <h1 className="text-sm lg:text-xl lg:absolute lg:left-[250px]">
                      Studio Nacraft
                    </h1>
                  </div>
                  <h1 className="text-xs font-light text-gray-500 lg:text-sm lg:text-black lg:max-w-[920px]">
                    • Jun 2020 - Jul 2020
                  </h1>
                  <h1 className="font-light hidden lg:flex lg:text-sm lg:max-w-[920px]">
                    • First-year internship, building exhibition booths to learn
                    production processes in factory.
                  </h1>
                </div>
              </div>
              <div className="w-full  h-[1.5px] bg-[#3C33E6]  relative">
                <div className="w-full  h-[1.5px] bg-[#3C33E6]  absolute lg:w-[948px]  lg:-left-[0px]  lg:bottom-0 hidden lg:flex"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
