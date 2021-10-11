import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Renders a global navigation header.
 * If the the user visits any projects page, the jays.space link routes to the projects collection page instead of the hom page.
 * If the user is on the homepage, the nav is not displayed (set to hidden).
 */

const MainNavigationBar = ({ children }) => {
  const route = useRouter();
  return (
    <nav
      className={` ${
        route.pathname === "/" || route.pathname === "/home" ? "hidden" : "visible"
      } flex justify-end w-screen px-6 py-6 fixed`}>
      <Link href={route.pathname.includes("projects/") ? "./" : "/"}>
        <a className='home-link font-header font-bold text-sm'>
          {route.pathname.includes("projects/")
            ? "jays.space.projects"
            : "jays.space"}
        </a>
      </Link>
      <section className='content'>{children}</section>
    </nav>
  );
};

export default MainNavigationBar;
