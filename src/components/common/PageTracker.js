import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageView",
        pagePath: location.pathname + location.search,
        pageTitle: document.title,
      });
    }
  }, [location]);

  return null;
}

export default PageTracker;
