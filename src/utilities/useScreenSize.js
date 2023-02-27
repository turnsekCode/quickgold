import { useState, useEffect } from "react";

if (typeof window !== "undefined") {
  var width1 = window.innerWidth;
  var height1 = window.innerHeight;
}
const useScreenSize = () => {
  const [width, setWidth] = useState(width1);
  const [height, setHeight] = useState(height1);
  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  }

  return { width, height };
};
export default useScreenSize;
