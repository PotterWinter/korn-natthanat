// ประกาศ interface สำหรับ props
interface ProjectDesktopThumbnailPropsRight {
  title: string;
  year: number;
  description: string;
  content: string;
  image: string;
}

export function ProjectDesktopThumbnailRight({
  title,
  year,
  description,
  content,
  image,
}: ProjectDesktopThumbnailPropsRight) {
  return (
    <>
      <div className="flex w-full h-[2px]  bg-[#3C33E6]"></div>
      <div className="flex flex-row w-full  justify-between items-center my-5 gap-10">
        <div className="flex flex-col ml-9 ">
          <div className="">
            <h1 className="text-2xl mb-6 inline-block hover:text-[#AFAFAF] cursor-pointer translate-all duration-200 ">
              {title}
            </h1>
          </div>
          <div className="flex flex-row justify-between -mt-5 mb-10 font-light w-[420px] ">
            <h1>{description}</h1>
            <h1>{year}</h1>
          </div>
          <div className="max-w-[420px] font-light">{content}</div>
        </div>
        <div className="flex duration-200 hover:scale-105 cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-[600px] h-[390px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
