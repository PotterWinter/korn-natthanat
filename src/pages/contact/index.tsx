import { Navbar } from "@/components/navbar";

export default function ContactIndex() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-white flex flex-col items-center text-black">
        <Navbar />
        <main className="flex justify-start lg:justify-center lg:max-w-[980px] mt-[140px] lg:mt-[250px] w-full px-4 mb-40 ">
          <div className="flex flex-col gap-16 w-full ">
            {/* div head title */}
            <h1 className=" text-[clamp(32px,_5vw,_60px)] text-inria ">
              <span className="text-[#3C33E6]">thank</span> you{" "}
              <span className="text-[#3C33E6]">for</span> your <br />
              kind <span className="text-[#3C33E6]">attention</span>
            </h1>
            <div className="w-full h-[2px] bg-[#3C33E6] lg:mb-2"></div>
            {/* div contact detail*/}
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold ">CONTACT DETAILS</h1>
                <div className=" font-light lg:text-2xl flex flex-col items-start">
                  <a
                    href="tel:+66868346007"
                    className="hover:scale-105 hover:text-gray-500 transform transition-all duration-200"
                    style={{ transformOrigin: "left bottom" }}
                  >
                    +66 86 834 6007
                  </a>
                  <a
                    href={"mailto:natthanataa@gmail.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 hover:text-gray-500 transform transition-all duration-200"
                    style={{ transformOrigin: "left bottom" }}
                  >
                    natthanataa@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">SOCIALS</h1>
                <div className="flex flex-col items-start gap-3 lg:gap-3 font-light lg:text-2xl">
                  <a
                    href="https://www.linkedin.com/in/korn-natthanat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 hover:text-gray-500 transform transition-all duration-200"
                    style={{ transformOrigin: "left bottom" }}
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/PotterWinter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 hover:text-gray-500 transform transition-all duration-200"
                    style={{ transformOrigin: "left bottom" }}
                  >
                    Github
                  </a>
                  <a
                    href="https://www.behance.net/korn-natthanat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 hover:text-gray-500 transform transition-all duration-200"
                    style={{ transformOrigin: "left bottom" }}
                  >
                    Behance
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">ADDRESS</h1>
                <div className=" font-light lg:w-[460px] lg:text-2xl">
                  <h1>
                    107/19, Lane 3/3, Phanason City Village, Bang Mueang,
                    Mueang, Srinakarin Road, Samut Prakan 10270
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
