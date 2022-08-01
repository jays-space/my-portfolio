import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "../constants/routes.constants";

const FooterLink = ({ label, path }) => {
  return (
    <Link href={path}>
      <span className="inline font-semibold text-base font-header px-2">
        {label}
      </span>
    </Link>
  );
};

const Footer = ({ children }) => {
  const route = useRouter();
  const { pathname } = route;

  return (
    <footer
      className={`flex flex-col items-center justify-center p-6 z-50 bg-black transition-opacity duration-300 delay-1200 `}
    >
      <FooterLink label="jays.space" path={"/"} />

      <div className="flex flex-row items-center justify-center my-6">
        {ROUTES.map((route, idx) => {
          return (
            <FooterLink key={idx} label={route?.label} path={route?.path} />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

// ${
//   route.pathname === "/" || route.pathname === "/home" ? "opacity-0 hidden" : "opacity-100 visible"
// }
