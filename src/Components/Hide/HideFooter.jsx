import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function HideFooter({ children }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (
      location.pathname.startsWith("/CheckOutPage") ||
      location.pathname.startsWith("/ReviewOrder") ||
      location.pathname.startsWith("/OrderSuccess")
    ) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
}
