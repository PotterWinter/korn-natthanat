import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Navbar() {
  const router = useRouter();
  const [showButtonMenu, setShowButtonMenu] = useState(false);
  const [popupSidebar, setPopupSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ตรวจสอบการเลื่อนหน้าจอ
      if (window.scrollY > 60) {
        setShowButtonMenu(true);
      } else {
        setShowButtonMenu(false);
      }
    };

    // เพิ่ม event listener สำหรับการเลื่อนหน้าจอ
    window.addEventListener("scroll", handleScroll);

    // ลบ event listener เมื่อ component ถูก unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // ป้องกันไม่ให้เลื่อนหน้าจอเมื่อ Sidebar เปิด
    if (popupSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // ลบ event เมื่อ component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popupSidebar]);

  function handleButtonSidebar() {
    setPopupSidebar(true);
    setShowButtonMenu(false);
  }

  function handleCloseButtonSidebar() {
    setPopupSidebar(false);
    setShowButtonMenu(true);
  }

  return (
    <>
      <header className="h-[60px] w-full px-5 lg:px-16 flex flex-row justify-between items-center text-xl ">
        <button
          onClick={() => router.push("/")}
          className="relative flex items-center group"
        >
          <span className="transition-transform duration-500 group-hover:rotate-[360deg]">
            ©
          </span>
          <span className="ml-2 transition-all duration-500 group-hover:opacity-0">
            Korn
          </span>
          <span className="ml-2 absolute opacity-0 translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-4 whitespace-nowrap">
            Natthanat
          </span>
        </button>

        {/* div menu mobile */}
        <button className="lg:hidden group flex flex-row items-center gap-2">
          <div
            className={`w-[6px] h-[6px] bg-black rounded-full opacity-100 group-hover:opacity-100 group-hover:w-[8px] group-hover:h-[8px] transition-all duration-300  hover:w-[8px] hover:h-[8px]
            `}
          ></div>
          Menu
        </button>

        {/* div menu desktop */}
        <div className="hidden lg:flex text-center gap-20 justify-between items-center">
          <NavButton label="Work" path="/work" />
          <NavButton label="About" path="/about" />
          <NavButton label="Contact" path="/contact" />
        </div>
      </header>
      <div className="w-full h-[2px] bg-[#3C33E6]"></div>

      {/* button menu scroll window */}
      <button
        type="button"
        className={`fixed top-5 right-5 bg-[#3C33E6] rounded-full flex flex-col justify-center items-center gap-[6px] 
    transition-all duration-300 ease-in-out hover:w-[45px] hover:h-[45px] active:w-[45px] active:h-[45px] group ${
      showButtonMenu
        ? "w-[45px] h-[45px] opacity-100"
        : "w-0 h-0 opacity-0 duration-200"
    }`}
        onClick={handleButtonSidebar}
      >
        <div className="bg-white w-7 h-[2px]"></div>
        <div className="bg-white w-7 h-[2px]"></div>
      </button>

      {/* show popupSidebar */}
      <div
        className={`fixed  bg-black  duration-700 ${
          popupSidebar ? "w-full h-full opacity-20 flex" : "opacity-0"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-[400px] bg-black shadow-lg transition-all duration-200 ${
          popupSidebar ? "translate-x-[0] z-50" : "translate-x-[100%]"
        }`}
      >
        <button
          className="absolute flex flex-col gap-2 top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition-all duration-300"
          onClick={handleCloseButtonSidebar}
        >
          <div className="bg-white w-7 h-[2px]"></div>
          <div className="bg-white w-7 h-[2px]"></div>
        </button>
      </div>
    </>
  );
}

function NavButton({ label, path }: { label: string; path: string }) {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <button
      className={`relative flex flex-col items-center transition-all transform group text-center ${
        isActive ? "scale-100" : "hover:scale-110"
      }`}
      onClick={() => router.push(path)}
    >
      {label}
      <div
        className={`w-[0px] h-[0px] bg-black rounded-full absolute mt-[28px] group-hover:w-[8px] group-hover:h-[8px] transition-all duration-300 ${
          isActive ? "w-[6px] h-[6px]" : ""
        }`}
      ></div>
    </button>
  );
}
