export type ButtonFilterType = "all" | "development" | "design";

export interface ProjectType {
  title: string;
  year: number;
  description: string;
  type: ButtonFilterType | ButtonFilterType[];
  content: string;
  responsibility: string;
  techStack: string;
  image: string;
  path: string;
  linkUrl: string;
  linkGitHub: string;
  linkBahance: string;
}

export const projects: ProjectType[] = [
  {
    title: "Buddy Blog",
    year: 2025,
    description: "Interaction & Development",
    type: "development",
    // type: ["development", "design"],
    content:
      "Developed “Buddy Blog,” a dynamic personal blog platform for seamless content creation and interaction. Key features include easy user sign-up, intuitive post creation, a comment system for engagement, and profile management. The platform ensures a smooth, user-friendly experience for both readers and content creators.",
    responsibility: "",
    techStack: `• HTML • CSS • JavaScript • React • Tailwind • TypeScript •
                    Node.js •`,
    image: "/image-project/buddy-blog/cover-buddy-blog.png",
    path: "/project/buddy-blog",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "",
  },

  {
    title: "Home Service",
    year: 2025,
    description: "Interaction & Development",
    type: "development",
    content:
      "Created a dynamic web platform to connect homeowners with reliable service providers. Key features include easy user sign-up, service listing management, address input for service location, review systems, and secure payment processing. Both homeowners and service providers have access to tailored dashboards, feature smooth interactions.",
    responsibility: `Final project form tech up full stack bootcamp 5 person in 8 week almost is about all of admin page, login user and login admin for all frontend and half of backend you can follow my duty form this path 
    
    • /admin/category • /admin/service • /admin/adminpromotioncode • /admin/logout • /admin/login • /login •`,
    techStack: `• HTML • CSS • JavaScript • React • Tailwind • TypeScript •
                    Node.js •`,
    image: "/image-project/home-service/cover-home-service.png",
    path: "/project/home-service",
    linkUrl: "home-service-finalproject.vercel.app",
    linkGitHub: "github.com/earthfm1670/home_service_finalproject",
    linkBahance: "",
  },
  {
    title: "Kathu",
    year: 2025,
    description: "Design & Branding",
    type: "design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
    responsibility: "",
    techStack: "",
    image: "/image-project/kathu/cover-kathu.png",
    path: "/project/kathu",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/191961219/KATHU-SWIMMING",
  },
  {
    title: "Chana",
    year: 2025,
    description: "Design & Branding",
    type: "design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
    responsibility: "",
    techStack: "",
    image: "/image-project/chana/cover-chana.png",
    path: "/project/chana",
    linkUrl: "",
    linkGitHub: "behance.net/gallery/190658395/CHANA",
    linkBahance: "",
  },
  {
    title: "day one",
    year: 2025,
    description: "Design & Branding",
    type: "design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
    responsibility: "",
    techStack: "",
    image: "/image-project/day-one/cover-day-one.png",
    path: "/project/day-one",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/185479759/day-one",
  },
  {
    title: "Wattarin House",
    year: 2025,
    description: "Design & Branding",
    type: "design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim magni officia! Officiis vero adipisci nostrum, recusandae tenetur veritatis soluta quaerat deserunt quae maiores odio illum vel, ad perferendis.",
    responsibility: "",
    techStack: "",
    image: "/image-project/wattarin-house/cover-wattarin-house.png",
    path: "/project/wattarin-house",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/181354925/WATTARIN-HOUSE",
  },
];
