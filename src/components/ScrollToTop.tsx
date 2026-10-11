import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Start each new page at the top (unless navigating to an anchor).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
