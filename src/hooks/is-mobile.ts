import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      // check if screen is lower than 768px wide, therefore if it's a movile or desktop device
      const windowWidth = window.innerWidth < 768;
      setIsMobile(windowWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;