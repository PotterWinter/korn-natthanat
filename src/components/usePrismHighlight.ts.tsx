import { useEffect } from "react";

export const usePrismHighlight = () => {
  useEffect(() => {
    // ทำการไฮไลต์โค้ดหลังจากคอมโพเนนต์โหลดเสร็จ
    if (typeof window !== "undefined" && window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);
};
