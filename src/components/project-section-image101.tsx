interface ProjectSectionImage101Prop {
  image: string;
  content: string;
}
interface ProjectSectionImage102Prop {
  image01: string;
  image02: string;
  content: string;
}
interface ProjectSectionImage103Prop {
  image01: string;
  image02: string;
  image03: string;
  content: string;
}

export function ProjectSectionImage101({
  image,
  content,
}: ProjectSectionImage101Prop) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <img src={image} alt={image} className="border-[1px] border-gray-100" />
        <h1 className="text-xs lg:text-sm font-light ">{content}</h1>
      </div>
    </>
  );
}
export function ProjectSectionImage102({
  image01,
  image02,
  content,
}: ProjectSectionImage102Prop) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <img
          src={image01}
          alt={image01}
          className="border-[1px] border-gray-100"
        />
        <img
          src={image02}
          alt={image02}
          className="border-[1px] border-gray-100"
        />
        <h1 className="text-xs lg:text-sm font-light ">{content}</h1>
      </div>
    </>
  );
}
export function ProjectSectionImage103({
  image01,
  image02,
  image03,
  content,
}: ProjectSectionImage103Prop) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <img
          src={image01}
          alt={image01}
          className="border-[1px] border-gray-100"
        />
        <img
          src={image02}
          alt={image02}
          className="border-[1px] border-gray-100"
        />
        <img
          src={image03}
          alt={image03}
          className="border-[1px] border-gray-100"
        />
        <h1 className="text-xs lg:text-sm font-light ">{content}</h1>
      </div>
    </>
  );
}
