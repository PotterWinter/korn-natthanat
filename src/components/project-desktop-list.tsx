import { useRouter } from "next/router";

// ประกาศ interface สำหรับ props
interface ProjectDesktopListProps {
  title: string;
  year: number;
  description: string;
  image: string;
  content: string;
  path: string;
  techStack: string;
}

export function ProjectDesktopList({
  title,
  year,
  description,
  content,
  path,
  image,
  techStack,
}: // image,
ProjectDesktopListProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col w-full group cursor-pointer">
        <div className="flex w-full h-[1.5px] bg-[#3C33E6]"></div>
        <div
          className="flex flex-row justify-between items-center my-3 py-0 overflow-clip   relative h-36"
          onClick={() => router.push(path)}
        >
          <div className="absolute left-9 top-0 h-full w-[260px]">
            <div className="h-full transition-all duration-300 ">
              <img
                src={image}
                alt={title}
                className="flex h-full object-cover cursor-pointer transition-all group-hover:translate-y-0 translate-y-[110%]  duration-500 "
                onClick={() => router.push(path)}
              />
            </div>
          </div>
          <div className=" flex-grow w-[310px]  flex flex-col ">
            <h1 className="text-2xl pl-9 transition-all duration-300 w-96 translate-y-0 group-hover:-translate-y-[300%]">
              {title}
            </h1>
          </div>
          <section className=" flex flex-col   justify-start w-screen  max-w-[730px] gap-2 ">
            <div className=" flex-grow w-[310px] overflow-clip  flex flex-col ">
              <h1 className="text-2xl transition-all duration-500 group-hover:-translate-y-0 translate-y-[300%] group-hover:text-[#3C33E6] cursor-pointer w-max">
                {title}
              </h1>
            </div>

            {techStack ? (
              <div className="transition-all duration-300 -mt-10 group-hover:mt-0 group-hover:text-gray-500">
                <div className="flex  justify-between w-[350px]  ">
                  <h1 className="text-sm ">{description}</h1>
                  <h1 className="text-sm  ml-5">{year}</h1>
                </div>
                <h1 className="text-sm text-black" style={{ wordSpacing: "10px" }}>
                  {techStack}
                </h1>
              </div>
            ) : (
              <div className="">
                <div className="flex  justify-between w-[350px] transition-all duration-300 group-hover:text-gray-500">
                  <h1 className="text-sm ">{description}</h1>
                  <h1 className="text-sm  ml-5">{year}</h1>
                </div>
                <div className="text-white">
                  <h1 className="transition-all duration-300 ease-in-out opacity-100 max-h-[50px] overflow-hidden group-hover:opacity-0 group-hover:max-h-0 mt-2 group-hover:mt-0 ">
                    .
                  </h1>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
