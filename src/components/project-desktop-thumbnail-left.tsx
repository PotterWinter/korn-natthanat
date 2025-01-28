import { useRouter } from "next/router";
// ประกาศ interface สำหรับ props
interface ProjectDesktopThumbnailPropsLeft {
  title: string;
  year: number;
  description: string;
  content: string;
  image: string;
  path: string;
  linkUrl: string;
}

export function ProjectDesktopThumbnailLeft({
  title,
  year,
  description,
  content,
  image,
  path,
  linkUrl,
}: ProjectDesktopThumbnailPropsLeft) {
  const router = useRouter();

  // เมื่อ path ว่างให้เปิด behanceUrl แทน
  const handleClick = () => {
    if (path === "") {
      // ถ้า path เป็น string เปล่าให้เปิด behanceUrl ในแท็บใหม่
      window.open(`https://${linkUrl}`, "_blank"); // ทำให้แน่ใจว่า behanceUrl มีรูปแบบ URL เต็ม
    } else {
      // ถ้า path มีค่าให้ไปยัง path นั้นในเว็บ
      router.push(path);
    }
  };

  return (
    <>
      <div className="flex w-full h-[1.5px]  bg-[#3C33E6]"></div>
      <div className="flex flex-row w-full gap-10 justify-between items-center my-5 ">
        {/* <div className="flex ml-9 w-[600px] h-[390px] bg-black"></div> */}
        <div className="flex ml-9 flex-row w-full  justify-between items-center  duration-200 hover:scale-105 cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-[600px] h-[360px] object-cover"
            onClick={handleClick}
          />
        </div>
        <div className="flex flex-col  w-full max-w-[420px] ">
          <h1
            className="text-2xl mb-6 inline-block cursor-pointer translate-all duration-200 hover:scale-105 hover:text-[#3C33E6] transform origin-left transition-all transform-origin-left"
            onClick={handleClick}
          >
            {title}
          </h1>
          <div className="flex flex-row justify-between w-full max-w-[420px] -mt-5 mb-10 font-light ">
            <h1>{description}</h1>
            <h1>{year}</h1>
          </div>
          <div className="max-w-[420px] text-sm font-light">{content}</div>
        </div>
      </div>
    </>
  );
}
