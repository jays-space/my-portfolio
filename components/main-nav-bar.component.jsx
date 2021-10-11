import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

/**
 * Renders a global navigation header.
 * If the the user visits any projects page, the jays.space link routes to the projects collection page instead of the hom page.
 * If the user is on the homepage, the nav is not displayed (set to hidden).
 */

const MainNavigationBar = ({ children }) => {
  const route = useRouter();
  const { pathname } = route;

  return (
    <nav
      className={`flex justify-end w-screen px-6 py-6 fixed z-50 transition-opacity duration-700 ease-in-out ${
        pathname === "/" || pathname === "/home" ? "opacity-0" : "opacity-100"
      }`}
    >
      <Link href={pathname.includes("projects/") ? "./" : "/home"}>
        <a className="home-link font-header font-bold text-sm">
          <Transition
            show={true}
            appear={true}
            enter="transition-opacity duration-700 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            jays.space
          </Transition>
        </a>
      </Link>
      <section className="content">{children}</section>
    </nav>
  );
};

export default MainNavigationBar;
