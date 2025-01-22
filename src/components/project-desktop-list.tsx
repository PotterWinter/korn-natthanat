// ประกาศ interface สำหรับ props
interface ProjectDesktopListProps {
  title: string;
  year: number;
  description: string;
  image: string;
  content: string;
}

export function ProjectDesktopList({
  title,
  year,
  description,
  content,
  image,
}: ProjectDesktopListProps) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full h-[2px] bg-[#3C33E6] "></div>
        <div className="flex flex-row justify-between items-start my-10 ">
          <h1 className="text-3xl w-[310px] pl-9">{title}</h1>
          <div className=" flex flex-col  justify-start w-[600px] gap-5 mt-1 relative">
            <h1 className="text-2xl absolute -left-[2px]">{description}</h1>
            <h1 className="text-sm font-light mt-12">{content}</h1>
          </div>
          <h1 className="text-xl mt-2">{year}</h1>
        </div>
        {/* <div className="flex w-full h-[250px] bg-black"></div> */}
        {/* <img
            src={image}
            alt={title}
            className="flex w-full h-[250px] object-cover"
          />
          <h1 className="text-2xl mt-4">{title}</h1>
          <div className="flex flex-row justify-between w-full -mt-5 font-light">
            <h1>{description}</h1>
            <h1>{year}</h1>
          </div> */}
      </div>
    </>
  );
}
