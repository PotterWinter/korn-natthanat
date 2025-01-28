import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Navbar() {
  const router = useRouter();
  const [showButtonMenu, setShowButtonMenu] = useState<boolean>(false);
  const [popupSidebar, setPopupSidebar] = useState<boolean>(false);
  const [holdColorButtonMenu, setHoldColorButtonMenu] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches; // เช็คว่าเป็นหน้าจอ lg หรือไม่
      const scrollThreshold = isLargeScreen ? 80 : 80;

      if (!isLargeScreen && router.pathname === "/") {
        if (window.scrollY > scrollThreshold) {
          setShowButtonMenu(true);
        } else {
          setShowButtonMenu(false);
        }
        // เฉพาะ mobile และ path === "/index"
        if (window.scrollY > 485 && window.scrollY < 575) {
          setShowButtonMenu(true);
        } else if (window.scrollY >= 575) {
          setShowButtonMenu(true);
        } else if (window.scrollY < scrollThreshold) {
          setShowButtonMenu(false);
        }
      } else {
        // สำหรับหน้าจออื่นหรือ path อื่น
        if (window.scrollY > scrollThreshold) {
          setShowButtonMenu(true);
        } else {
          setShowButtonMenu(false);
        }
      }
    };

    // เพิ่ม event listener สำหรับการเลื่อนหน้าจอ
    window.addEventListener("scroll", handleScroll);

    // ลบ event listener เมื่อ component ถูก unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

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
    // setShowButtonMenu(false);
  }
  function handleMenuSidebar() {
    setPopupSidebar(true);
  }

  function handleCloseButtonSidebar() {
    setPopupSidebar(false);

    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches; // เช็คว่าเป็นหน้าจอ lg หรือไม่
    const scrollThreshold = isLargeScreen ? 80 : 80;

    // ตรวจสอบว่าหน้าจอไม่ได้เลื่อนต่ำกว่า 60
    if (window.scrollY < scrollThreshold) {
      setShowButtonMenu(false);
    } else {
      setShowButtonMenu(true);
    }
  }

  return (
    <>
      <header className="h-[80px] w-full px-5 lg:px-16 flex flex-row justify-center items-center text-xl ">
        <div className="flex flex-row w-full justify-between items-center max-w-[1440px]">
          {/* button for home page */}
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
          <button
            className="lg:hidden group flex items-center gap-1 cursor-pointer  z-20"
            onClick={handleMenuSidebar}
            type="button"
          >
            <div
              className={`w-[6px] h-[6px] bg-black rounded-full opacity-100 group-hover:opacity-100 group-hover:w-[8px] group-hover:h-[8px] transition-all duration-300  hover:w-[8px] hover:h-[8px] 
            `}
            >
            </div>
              Menu
          </button>

          {/* div menu desktop */}
          <div className="hidden lg:flex text-center gap-20 justify-between items-center z-20">
            <NavButton label="Work" path="/" />
            <NavButton label="About" path="/about" />
            <NavButton label="Contact" path="/contact" />
          </div>
        </div>
      </header>
      <div className="w-full h-[1.5px] bg-[#3C33E6]"></div>

      {/* button menu */}
      <div className="fixed top-5 right-5 lg:top-8 lg:right-8 flex items-center justify-center  z-10">
        <button
          type="button"
          className={`  hover:bg-[#3C33E6] rounded-full flex flex-col justify-center items-center gap-[6px] transition-all  w-[45px] h-[45px] hover:w-[45px] hover:h-[45px] lg:h-16 lg:w-16 lg:hover:w-16 lg:hover:h-16 group transform origin-center  duration-300${
            showButtonMenu ? " scale-100 opacity-100  " : " scale-0 opacity-0 "
          }${holdColorButtonMenu ? "bg-[#3C33E6] duration-0" : "bg-black "}`}
          onClick={() => {
            handleButtonSidebar();
          }}
          onMouseLeave={() => setHoldColorButtonMenu(false)}
        >
          <div className="bg-white w-7 h-[2px]"></div>
          <div className="bg-white w-7 h-[2px]"></div>
        </button>
      </div>

      {/* show popupSidebar */}

      <div
        className={`fixed bg-black  duration-700 ${
          popupSidebar ? "w-full h-full opacity-20 flex" : "opacity-0"
        }`}
        onClick={handleCloseButtonSidebar}
      ></div>
      <div
        className={`fixed flex items-center top-0 right-0 h-full w-full lg:w-[400px] bg-black shadow-lg transition-all duration-200 ${
          popupSidebar ? "translate-x-[0] z-50" : "translate-x-[100%]"
        }`}
      >
        {/* button for close sidebar */}
        <div className="fixed top-6 right-6 lg:top-11 lg:right-11 flex items-center justify-center">
          <button
            className="flex flex-col justify-center gap-2 top-6 right-8 w-[40px] h-[40px] rounded-full shadow-md transition-all duration-300 p-[6px]"
            onClick={() => {
              handleCloseButtonSidebar();
              setHoldColorButtonMenu(true);
            }}
          >
            <div
              className={`bg-white w-full h-[2px]${
                popupSidebar
                  ? " duration-1000 rotate-[-45deg]"
                  : "duration-1000 rotate-[0deg]"
              }`}
            >
              <div
                className={`bg-white w-full h-[2px] rotate-[45deg] ${
                  popupSidebar
                    ? " duration-1000 rotate-[90deg]"
                    : "duration-1000 rotate-[0deg]"
                }`}
              ></div>
            </div>
          </button>
        </div>
        {/* sidebar for navigation page */}
        <div className="px-14 py-24 gap-16 flex flex-col w-full mr-5">
          <div className="flex flex-col w-full ">
            <h1 className="text-[#AFAFAF] text-sm ">NAVIGATION</h1>
            <div className="bg-[#AFAFAF] w-full h-px mt-4"></div>
          </div>
          <div className="flex flex-col gap-12 text-white text-3xl w-full items-start text-left">
            {/* <SidebarButtonNavigate
              label="Home"
              path="/"
              setPopupSidebar={setPopupSidebar}
            /> */}
            <SidebarButtonNavigate
              label="Work"
              path="/"
              setPopupSidebar={setPopupSidebar}
            />
            <SidebarButtonNavigate
              label="About"
              path="/about"
              setPopupSidebar={setPopupSidebar}
            />
            <SidebarButtonNavigate
              label="Contact"
              path="/contact"
              setPopupSidebar={setPopupSidebar}
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-[#AFAFAF] text-sm ">SOCIAL</h1>
            <div className="text-white  w-full mt-4 flex justify-between">
              <a
                href="https://www.linkedin.com/in/korn-natthanat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-200 transform origin-bottom"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/PotterWinter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-200 transform origin-bottom"
              >
                Github
              </a>
              <a
                href="https://www.behance.net/korn-natthanat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-200 transform origin-bottom"
              >
                Behance
              </a>
              <a
                href={"mailto:natthanataa@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-200 transform origin-bottom"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function NavButton({ label, path }: { label: string; path: string }) {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <button
      className={`relative flex flex-col items-center transition-all transform group text-center  ${
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

export function SidebarButtonNavigate({
  label,
  path,
  setPopupSidebar,
}: {
  label: string;
  path: string;
  setPopupSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <button
      className={`relative flex flex-row items-center  transition-all transform group text-left hover:scale-105 hover:origin-left`}
      onClick={() => {
        // ปิด Sidebar ด้วยการตั้งค่า popupSidebar เป็น false
        setPopupSidebar(false);

        // หน่วงเวลาเพื่อรอแอนิเมชันปิดเสร็จ ก่อน navigate ไปยัง path
        setTimeout(() => {
          router.push(path);
        }, 300); // ค่า 300 ms ควรตรงกับ duration ของ transition-all
      }}
    >
      {label}
      <div
        className={`w-[0px] h-[0px] bg-white rounded-full absolute  -left-4 group-hover:w-[8px] group-hover:h-[8px] hover:origin-center transition-all duration-300 ${
          isActive ? "w-[6px] h-[6px]" : ""
        }`}
      ></div>
    </button>
  );
}
