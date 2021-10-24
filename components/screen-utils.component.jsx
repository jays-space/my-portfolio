import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

/*
  * Renders a header section of a page. 
  * Component contains a title, a propmp to scroll down (an arrow icon), and the background in the primary color.
  * Also contains an animation that runs everytime the component mounts.
  * On arrow icon tap, the app scrolls to the content section
  
*/
export const SectionHeader = ({ contentRef, children }) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  });

  // *Listens for scroll action by the user
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  // *Manages the orange bg opacity on scroll
  const handleScroll = () => {
    if (document.body.scrollTop <= 100) {
      setScrolledToTop(true);
      console.log("position: ", scrolledToTop);
    } else {
      setScrolledToTop(false);
      console.log("position: ", scrolledToTop);
    }
  };

  return (
    <section className="header-section h-screen">
      <div
        className={`fixed top-0 left-0 bg-primary w-screen h-screen transition-opacity duration-700 z-n1 ${
          scrolledToTop ? "opacity-100" : "opacity-0"
        }`}
      />
      <Transition
        show={true}
        appear={true}
        className="tablet:px-12 desktop:px-72"
      >
        <Transition.Child
          enter={`transition-all duration-1000 ease-in-out delay-500`}
          enterFrom={`opacity-0 translate-y-8 z-10`}
          enterTo="opacity-100 translate-y-0 z-10"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100 z-10"
          leaveTo="opacity-0 z-10"
        >
          <span className="h-full flex flex-col mt-40 mobile-360:mt-52 tablet-md:mt-72 pl-6 z-10">
            <h1
              className={`font-header text-4xl mobile-360:text-5xl mobile-410:text-6xl tablet:text-7xl laptop:text-8xl  mobile-410:pr-6 font-bold max-w-2xl tablet-md:max-w-3xl tablet-lg:max-w-5xl`}
            >
              {children}
            </h1>
            {/* 
            //! scrolledToTop controlls opacity. Opacity cannot be controlled by both scrolledToTop and showArrow simultaneously. Set to hidden/visible in the meanwhile
            //TODO: Delay and Smooth animate the arrow on page mount 
            
            ${showArrow ? "flex" : "hidden"}
          */}
            <span
              className={`flex h-12 w-12 justify-center items-center mx-auto z-40 mt-36 mobile-375:mt-40 mobile-410:mt-60 laptop:mt-40 desktop:mt-60 transition-opacity ease-in-out duration-700 cursor-pointer ${
                scrolledToTop ? "opacity-100" : "opacity-0"
              }`}
              onClick={() =>
                contentRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <svg
                className="animate-bounce w-6 h-6 text-amber-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </span>
          </span>
        </Transition.Child>
      </Transition>
    </section>
  );
};

export const Content = ({ project, children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <section
      className={`min-h-screen flex flex-col pl-6 items-start justify-center ${
        pathname !== "/projects" && "laptop:items-center"
      }   bg-black mb-1`}
    >
      <CustomSection project={project}>{children}</CustomSection>
      {/* <div className="orange-bg fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-primary via-primary" /> */}
    </section>
  );
};

export const CustomSection = ({ project, children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Transition
      show={true}
      appear={true}
      className={pathname === "/projects" ? "w-full" : ""}
    >
      <Transition.Child
        enter="transition-opacity duration-500 delay-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section
          className={`h-full w-full flex flex-col z-30 justify-between pt-12 ${
            pathname !== "/projects" && "laptop:justify-center"
          }`}
        >
          {children}
        </section>
        <div
          className={`justify-center mb-14 mt-20 ${
            pathname === "/" ? "hidden" : "flex"
          }`}
        >
          {/* <span
            className="text-sm font-bold z-40 font-header cursor-pointer hover:border-b-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            Back To Top
          </span> */}
        </div>
      </Transition.Child>
    </Transition>
  );
};

export const ImageSection = ({ src, alt, project }) => {
  return (
    <Transition show={true} appear={true}>
      <Transition.Child
        enter="transition-all duration-1000 delay-1200 ease-in-out"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="flex flex-col pr-6 tablet:pl-12"
      >
        <div
          className={`relative items-center justify-center self-center overflow-hidden ${
            project ? "h-36 mobile-360:h-56 mobile-410:h-72 tablet:h-80 tablet-md:h-96 w-full mt-6 px-3" : "w-48 h-48 mt-8 mb-8"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="inherit"
            className="rounded-lg"
          />
        </div>
      </Transition.Child>
    </Transition>
  );
};
