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

export const projectsData: ProjectType[] = [
  {
    title: "Buddy Blog",
    year: 2025,
    description: "Interaction & Development",
    type: "development",
    // type: ["development", "design"],
    content:
      "Developed “Buddy Blog,” a dynamic personal blog platform for seamless content creation and interaction. Key features include easy user sign-up, intuitive post creation, a comment system for engagement, and profile management. The platform ensures a smooth, user-friendly experience for both readers and content creators.",
    responsibility: "Still in process",
    techStack: `• Nuxt.js • PostgresSQL • TypeScript • Tailwind • SupabaseAuth •`,
    image: "/image-project/buddy-blog/cover-buddy-blog.png",
    path: "/project/buddy-blog",
    linkUrl: "buddy-blog-bb.vercel.app",
    linkGitHub: "github.com/Thanapat1502/buddy-blog",
    linkBahance: "",
  },

  {
    title: "Home Service",
    year: 2025,
    description: "Interaction & Development",
    type: "development",
    content:
      "Created a dynamic web platform to connect homeowners with reliable service providers. Key features include easy user sign-up, service listing management, address input for service location, review systems, and secure payment processing. Both homeowners and service providers have access to tailored dashboards, feature smooth interactions.",
    responsibility: `Final project form tech up full stack bootcamp team 5 person in 8 week is all about admin management system and login page for all frontend and half of backend you can follow my duty form this path 
    
    • /admincategory • /adminservice • /adminpromotioncode • /adminlogin • /login •`,
    techStack: `• Next.js • PostgresSQL • TypeScript • Tailwind • SupabaseAuth •`,
    image: "/image-project/home-service/cover-home-service.png",
    path: "/project/home-service",
    linkUrl: "home-service-finalproject.vercel.app",
    linkGitHub: "github.com/earthfm1670/home_service_finalproject",
    linkBahance: "",
  },
  {
    title: "Chana",
    year: 2024,
    description: "Design & Branding",
    type: "design",
    content:
      `With years of expertise in the industry and extensive involvement in product manufacturing, we are a producer who deeply understands the intricacies of production—both in terms of product quality and pricing. Driven by a philosophy of creating valuable work and fostering memorable growth, joining the market as a distributor presents a unique opportunity. It allows us to see our high potential for growth in both sustainable production and our ability to respond to market demands effectively.`,
    responsibility: `responsible for the design process over a period of 6 weeks, where I presented design approaches and communication strategies aligned with the brand owner's vision. In the final phase, the designs were presented to the management and factory team for decision-making. Throughout the design process, the factory owner's ideas and requirements were also integrated into the work.`,
    techStack: "",
    image: "/image-project/chana/cover-chana.png",
    path: "/project/chana",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/190658395/CHANA",
  },
  {
    title: "Kathu",
    year: 2024,
    description: "Design & Branding",
    type: "design",
    content: `The branding for the swimming club embodies the dedication and perseverance of athletes. Inspired by the rhythmic waves created by powerful kicks, the logo symbolizes a swimmer's unwavering commitment. The refined consistency and strength of trained athletes set them apart from amateurs, reflecting the discipline and passion that define their journey.`,
    responsibility: `Responsible for presenting the brand concept to the client within an 8-week timeframe. The client was highly satisfied with the work and did not request any revisions after receiving the initial design. The concept was not merely focused on aesthetics but aimed to convey deeper meaning and the brand's identity, which was developed through research conducted during the first two weeks.`,
    techStack: "",
    image: "/image-project/kathu/cover-kathu.png",
    path: "/project/kathu",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/191961219/KATHU-SWIMMING",
  },

  {
    title: "day one",
    year: 2024,
    description: "Design & Branding",
    type: "design",
    content:
      "Creating an image for DAY ONE as a barbershop brand that already has high services and standards but lacks a strong communication identity. With the same level of quality in place, the brand image becomes a clearer reflection of who you are and what you represent from within.",
    responsibility: `The responsibility lasted for 6 weeks, where the work was sold in the first week and presented in the last week. During the process, two rounds of revisions were made to align with the communication goals and image that the client desired. The brand was ready for immediate use once the design was completed. The shop is located in the heart of Bangkok and received a high level of satisfaction from the client.`,
    techStack: "",
    image: "/image-project/day-one/cover-day-one.png",
    path: "/project/day-one",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/185479759/day-one",
  },
  {
    title: "Wattarin House",
    year: 2023,
    description: "Design & Branding",
    type: "design",
    content:
      "Crafting an identity for WATTARIN - Logo Family serves as the umbrella brand for our real estate group. The journey begins with construction contractors aspiring to expand their businesses. With a vision to reach a broader audience, the goal is to become a household name. Our strategy includes targeted advertising, enabling individuals to connect with their unique brand. This initiative aims to enhance the brand presence of construction contractors, positioning them competitively in the mid-to-high-end market.",
    responsibility: `Responsible for presenting the project directly to the brand owner, a real estate brand in Phuket. The entire process took six weeks, with the first week dedicated to pitching and signing the contract and the final week scheduled for project delivery. During the research phase, site visits were conducted to experience the atmosphere and environment firsthand, ensuring a deep understanding of the company's identity.`,
    techStack: "",
    image: "/image-project/wattarin-house/cover-wattarin-house.png",
    path: "/project/wattarin-house",
    linkUrl: "",
    linkGitHub: "",
    linkBahance: "behance.net/gallery/181354925/WATTARIN-HOUSE",
  },
];
