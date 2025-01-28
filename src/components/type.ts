export type ButtonFilterType = "all" | "development" | "design" ;

export interface ProjectType {
  title: string;
  year: number;
  description: string;
  type: ButtonFilterType | ButtonFilterType[]; // เปลี่ยน type เป็นรองรับทั้ง string เดียวหรือ array ของ ButtonType
  content: string;
  image: string;
  path: string;
  LinkUrl: string;
}

declare global {
  interface Window {
    Prism: typeof import('prismjs')
  }
}