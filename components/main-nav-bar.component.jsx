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
      className={`flex flex-col justify-end w-screen pr-6 py-12 fixed z-50 transition-all duration-700 ease-in-out tablet-lg:justify-between tablet:pr-12 tablet-lg:pr-20 tablet-lg:h-screen tablet-lg:w-max tablet-lg:right-0 desktop:pr-60 desktop:py-28`}
    >
      <Transition
        className="flex justify-end tablet-lg:hidden"
        show={true}
        appear={true}
        enter="transition-all duration-700 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Link href={"/"}>
          <a
            className={`home-link font-header font-bold text-sm cursor-pointer ${
              pathname === "/" || pathname === "/home"
                ? "opacity-0"
                : "opacity-100"
            }`}
          >
            jays.space.
          </a>
        </Link>
      </Transition>

      <Transition
        className="nav-links hidden w-full justify-end tablet-lg:flex"
        show={true}
        appear={true}
        enter="transition-all duration-700 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="flex flex-col items-end font-header font-bold text-lg">
          <li className="mb-2 cursor-pointer">
            <Link href="/about">
              <a className="nav-link ">About.</a>
            </Link>
          </li>
          <li className="mb-2 cursor-pointer">
            <Link href="/projects/">
              <a className="nav-link">Projects.</a>
            </Link>
          </li>
          <li className="mb-2 cursor-pointer">
            <Link href="/contact">
              <a className="nav-link">Contact.</a>
            </Link>
          </li>
        </ul>
      </Transition>

      <Transition
        className="hidden h-full justify-end items-end tablet-lg:flex"
        show={true}
        appear={true}
        enter="transition-all duration-700 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Link href="/">
          <a
            className={`home-link-bottom font-header font-bold text-lg cursor-pointer ${
              pathname === "/" || pathname === "/home"
                ? "opacity-0"
                : "opacity-100"
            }`}
          >
            jays.space.
          </a>
        </Link>
      </Transition>

      <section className="content">{children}</section>
    </nav>
  );
};

export default MainNavigationBar;
