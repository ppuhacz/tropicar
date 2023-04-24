import React, { useEffect, ComponentType } from "react";
import { useLocation } from "react-router-dom";

// This component ensures that page will always go to the top on redirect

const ScrollToTop = <P extends object>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const ScrollToTopComponent = (props: P) => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <Component {...props} />;
  };

  return ScrollToTopComponent;
};

export default ScrollToTop;
