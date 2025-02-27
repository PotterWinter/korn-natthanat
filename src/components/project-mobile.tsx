import { useRouter } from "next/router";
// ประกาศ interface สำหรับ props
interface ProjectMobileProps {
  title: string;
  year: number;
  description: string;
  image: string;
  path: string;
}

export function ProjectMobile({
  title,
  year,
  description,
  image,
  path
}: ProjectMobileProps) {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-col w-full gap-5 mb-5">
        <div className="flex w-full h-[1.5px] bg-[#3C33E6]"></div>
        {/* <div className="flex w-full h-[250px] bg-black"></div> */}
        <img
          src={image}
          alt={title}
          className="flex w-full h-[250px] object-cover"
          onClick={()=>router.push(path)}
        />
        <h1 className="text-2xl mt-4"
        onClick={()=>router.push(path)}>{title}</h1>
        <div className="flex flex-row justify-between w-full -mt-5 font-light">
          <h1>{description}</h1>
          <h1>{year}</h1>
        </div>
      </div>
    </>
  );
}
