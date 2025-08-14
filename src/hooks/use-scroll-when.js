import { useEffect } from "react";

export const useScrollWhen = (when, scrollHeight) => {
  useEffect(() => {
    if (when) {
      window.scrollTo({
        top: window.scrollY + scrollHeight,
        behavior: "smooth",
      });
    }
  }, [when, scrollHeight]);
};
