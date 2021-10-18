import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = ({ children }) => {
  const route = useRouter();
  const { pathname } = route;
  return (
    <footer
      className={`flex justify-end p-6 transition-opacity duration-300 delay-1200 ${
        route.pathname === "/" || route.pathname === "/home" ? "opacity-0 hidden" : "opacity-100 visible"
      } `}
    >
      {/* {pathname === "/about" && (
        <Link href="/projects/">
          <span className="inline font-semibold text-base font-header border-b-2">
            projects.
          </span>
        </Link>
      )}

      {pathname === "/projects" && (
        <Link href="/contact">
          <span className="inline font-semibold text-base font-header border-b-2">
            contact.
          </span>
        </Link>
      )}
      {pathname === "/contact" && (
        <Link href="/about">
          <span className="inline font-semibold text-base font-header border-b-2">
            about.
          </span>
        </Link>
      )} */}
    </footer>
  );
};

export default Footer;
