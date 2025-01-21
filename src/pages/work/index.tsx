import { Navbar } from "@/components/navbar";
import { ProjectMobile } from "@/components/project-mobile";

export default function Work() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col text-black">
        <Navbar />
        <main className="w-full max-w-[1140px mt-[140px] lg:mt-[280px] flex flex-col items-start px-4 lg:px-0 mb-40">
          {/* div head title */}
          <div className="flex flex-col gap-10 w-full">
            <div className="text-[clamp(32px,_5vw,_60px)] lg:min-w-[569px] ">
              <h1 className="text-inria">
                <span className="text-[#3C33E6]">Intend</span> to creating
                <br />
                digital products
              </h1>
            </div>
            <div className="flex flex-row gap-2">
              <button className="border border-[#AFAFAF] py-3 px-5 rounded-full hover:bg-black hover:text-white duration-200">
                All
              </button>
              <button className="border border-[#AFAFAF] py-3 px-5 rounded-full hover:bg-black hover:text-white duration-200">
                Development
              </button>
              <button className="border border-[#AFAFAF] py-3 px-5 rounded-full hover:bg-black hover:text-white duration-200">
                Design
              </button>
            </div>
          </div>
          <div className="h-10"></div>
          {/* project */}
          <ProjectMobile 
        title="Home Service" 
        year={2025}
        description="Interaction & Development" 
      />
      <ProjectMobile 
        title="Web Design" 
        year={2025} 
        description="UI/UX Design" 
      />
      <ProjectMobile 
        title="Mobile App" 
        year={2025}
        description="Cross-platform App" 
      />
        </main>
      </div>
    </>
  );
}
