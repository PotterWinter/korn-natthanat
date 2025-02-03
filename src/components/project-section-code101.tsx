import dynamic from "next/dynamic";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), {
  ssr: false,
});

// import "prismjs/themes/prism.css";
// import "prismjs";
// import "prismjs/components/prism-javascript.min.js";
// import { usePrismHighlight } from "@/components/usePrismHighlight.ts";

interface ProjectSectionCode101Prop {
  filepath: string;
  coding: string;
  content: string;
}
// interface ProjectSectionCode102Prop {
//   filepath01: string;
//   filepath02: string;
//   coding01: string;
//   coding02: string;
//   content: string;
// }

export function ProjectSectionCode101({
  filepath,
  coding,
  content,
}: ProjectSectionCode101Prop) {
  // usePrismHighlight();
  return (
    <>
      <div className=" flex flex-col gap-3 items-center w-full">
        {/* <div className=" flex flex-col gap-3 lg:max-w-[948px] w-[91vw] sm:w-[95vw] sm:bg-red-500 md:bg-green-500 md:w-[93vw]"> */}
        <div className=" bg-[#3a404d] text-xs lg:text-sm ">
          <div className="flex justify-between px-4 text-white items-center text-sm py-2 mt-1">
            {filepath}
          </div>
          <div className=" max-w-[948px] overflow-x-auto w-[91vw]">
            <SyntaxHighlighter
              language="jsx"
              style={atomOneDark}
              customStyle={{
                padding: "25px",
                paddingBottom: "40px",
              }}
              // wrapLongLines={true}
              className=""
              // max-w-[91vw]
            >
              {coding}
            </SyntaxHighlighter>
          </div>
        </div>
        <h1 className="text-xs lg:text-sm font-light ">{content}</h1>
        <div className=" flex flex-col gap-3"></div>
      </div>
    </>
  );
}
