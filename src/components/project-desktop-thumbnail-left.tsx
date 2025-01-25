// ประกาศ interface สำหรับ props
interface ProjectDesktopThumbnailPropsLeft {
  title: string;
  year: number;
  description: string;
  content: string;
  image: string;
}

export function ProjectDesktopThumbnailLeft({
  title,
  year,
  description,
  content,
  image,
}: ProjectDesktopThumbnailPropsLeft) {
  return (
    <>
      <div className="flex w-full h-[2px]  bg-[#3C33E6]"></div>
      <div className="flex flex-row w-full gap-10 justify-between items-center my-16 ">
        {/* <div className="flex ml-9 w-[600px] h-[390px] bg-black"></div> */}
        <div className="flex ml-9 flex-row w-full  justify-between items-center mb-5 duration-200 hover:scale-105 cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-[600px] h-[390px] object-cover"
          />
        </div>
        <div className="flex flex-col  w-full max-w-[420px] ">
          <h1 className="text-2xl mb-6 inline-block hover:text-[#AFAFAF] cursor-pointer translate-all duration-200 ">
            {title}
          </h1>
          <div className="flex flex-row justify-between w-full max-w-[420px] -mt-5 mb-10 font-light ">
            <h1>{description}</h1>
            <h1>{year}</h1>
          </div>
          <div className="max-w-[420px] font-light">{content}</div>
        </div>
      </div>
    </>
  );
}
