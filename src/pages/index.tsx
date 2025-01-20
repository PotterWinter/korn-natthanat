export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-col">
        <header className="h-[60px] w-full px-5 lg:px-16 flex flex-row justify-between items-center text-xl">
          <div>© Korn</div>
          <div className="lg:hidden">
            <span>• </span>Menu
          </div>
          <div className="hidden lg:flex gap-20 ">
            <h1>Work</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            </div>
        </header>
        <div className="w-full h-[2px] bg-[#3C33E6]"></div>
        <main className="w-full mt-40 lg:mt-[30px] flex flex-col lg:flex-row justify-between px-4 lg:px-0 font-sans   lg:pl-[120px] lg:pr-[40px]">
          {/* div head title */}
          <div className="lg:min-w-[569px]">
          <h1 className=" text-[clamp(42px,_5vw,_60px)] lg:mt-28">
            An <span className="text-[#3C33E6]">experimental</span> <br />
            developer with a strong <br />
            interest in <span className="text-[#3C33E6]">fullstack web</span>
            <br />
            <span className="text-[#3C33E6]">solutions</span> and{" "}
            <span className="text-[#3C33E6]">modern</span> <br />
            <span className="text-[#3C33E6]">technologies</span>.
          </h1>
          </div>
          {/* div content */}
          <div className="flex gap-10 lg:gap-[290px] flex-col lg:w-[350px] ">
            <h1 className="mt-20 lg:mt-16 text-[#3C33E6] font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </h1>
            <h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </h1>
          </div>
          <div className="h-20 lg:hidden"></div>
        </main>
      </div>
    </>
  );
}
