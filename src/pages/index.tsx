import { Navbar } from "@/components/navbar";

export default function HomeIndex() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col text-black">
        <Navbar />
        <main className="w-full mt-[140px] lg:mt-[30px] flex justify-center px-4 lg:px-0 font-sans   mb-44">
          <div className="flex justify-between w-full flex-col lg:flex-row lg:max-w-[1560px]  lg:pr-10 lg:pl-32">
            {/* div head title */}
            <div className="lg:min-w-[569px]">
              <h1 className=" text-[clamp(32px,_5vw,_72px)] lg:mt-28 text-inria">
                An <span className="text-[#3C33E6]">experimental</span> <br />
                developer with a strong <br />
                interest in{" "}
                <span className="text-[#3C33E6]">fullstack web</span>
                <br />
                <span className="text-[#3C33E6]">solutions</span> and{" "}
                <span className="text-[#3C33E6]">modern</span> <br />
                <span className="text-[#3C33E6]">technologies</span>.
              </h1>
            </div>
            {/* div content */}
            <div className="flex gap-10 lg:gap-[350px] flex-col lg:w-[375px] ">
              <h1 className="mt-20 lg:mt-22 text-[#3C33E6] font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has
              </h1>
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic
              </h1>
            </div>
          </div>
          <div className="h-20 lg:hidden"></div>
        </main>
      </div>
    </>
  );
}
