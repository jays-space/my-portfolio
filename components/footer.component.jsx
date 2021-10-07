import React from "react";
import { useRouter } from "next/router";

const Footer = ({ children }) => {
  const route = useRouter();
  return (
    <footer
      className={` ${route.pathname === "/" ? "hidden" : "visible"} `}></footer>
  );
};

export default Footer;
