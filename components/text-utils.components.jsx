import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export const Greeting = ({ children }) => {
  return (
    <Transition show={true} appear={true} className="tablet:px-12">
      <Transition.Child
        enter="transition-all duration-1000 delay-800 ease-in-out"
        enterFrom={`opacity-0 translate-y-8`}
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span className="text-sm mb-1">{children}</span>
      </Transition.Child>
    </Transition>
  );
};

export const MainHeader = ({ greeting, noMargin, stagger, children }) => {
  return (
    <Transition show={true} appear={true} className="tablet:px-12 laptop:px-36">
      <Transition.Child
        enter={`transition-all duration-1000 ease-in-out ${
          stagger ? "delay-1400" : "delay-800"
        }`}
        enterFrom={`opacity-0 ${stagger ? "translate-y-4" : "translate-y-8"}`}
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span className="text-sm mb-1 tablet:text-base desktop:text-lg">{greeting}</span>
        <h1
          className={`font-header text-4xl mobile-410:text-5xl tablet:text-6xl tablet-md:text-7xl desktop:text-8xl tablet-lg:max-w-3xl desktop:max-w-6xl font-bold ${
            noMargin ? "" : "mt-4"
          }`}
        >
          {children}
        </h1>
      </Transition.Child>
    </Transition>
  );
};

/*
  * Renders a header section of a page. 
  * Component contains a title, a propmp to scroll down (an arrow icon), and the background in the primary color.
  * Also contains an animation that runs everytime the component mounts.
  * On arrow icon tap, the app scrolls to the content section
  
*/
export const SectionHeader = ({ contentRef, children }) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  });

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY <= 10) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [setScrolledToTop]);

  return (
    <section className="header-section h-screen">
      <div
        className={`fixed top-0 left-0 bg-primary w-screen h-screen transition-opacity duration-700 z-n1 ${
          scrolledToTop ? "opacity-100" : "opacity-0"
        }`}
      />
      <Transition show={true} appear={true} className="tablet:px-12 laptop:px-36">
        <Transition.Child
          enter={`transition-all duration-1000 ease-in-out delay-500`}
          enterFrom={`opacity-0 translate-y-8 z-10`}
          enterTo="opacity-100 translate-y-0 z-10"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100 z-10"
          leaveTo="opacity-0 z-10"
        >
          <span className="h-screen flex flex-col mb-72 mt-40 mobile-360:mt-52 tablet-md:mt-72 pl-6 z-10">
            <h1
              className={`font-header text-4xl mobile-360:text-5xl mobile-410:text-6xl tablet:text-7xl mobile-410:pr-6 font-bold max-w-2xl tablet-md:max-w-3xl`}
            
            >
              {children}
            </h1>
            {/* 
            //! scrolledToTop controlls opacity. Opacity cannot be controlled by both scrolledToTop and showArrow simultaneously. Set to hidden/visible in the meanwhile
            //TODO: Smooth animate the arrow on page mount 
            
            ${showArrow ? "flex" : "hidden"}
          */}
            <span
              className={`h-12 mx-auto z-40 mt-36 mobile-375:mt-40 mobile-410:mt-60 transition-opacity ease-in-out duration-700 ${
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

export const SubHeader = ({ project, children }) => {
  return (
    <h3
      className={`font-header font-bold text-primary tablet:px-12 ${
        project ? "text-lg mt-8" : "text-2xl mt-6 laptop:pl-12"
      }`}
    >
      {children}
    </h3>
  );
};

export const ProjectHeader = ({ title, subtitle, image, alt }) => {
  return (
    <span className="flex flex-col pl-6 h-screen">
      {/* Header and subtitle */}
      <div className="flex flex-col mt-40 mb-12">
        <span className={`font-header text-4xl font-bold`}>{title}</span>
        <p className={`text-primary text-sm max-w-prose mt-4 pr-6`}>
          {subtitle}
        </p>
      </div>

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg rounded-bl-lg"
          />
        </div>
      </div>
    </span>
  );
};

export const CustomLink = ({ url, title, header, newTab }) => {
  return (
    <Link href={url}>
      {newTab ? (
        <a target="_blank" className="z-50 tablet:px-12">
          {header ? (
            <span className="inline text-primary font-semibold">{title}</span>
          ) : (
            <span className="inline text-primary font-semibold text-base font-header">
              {title}
            </span>
          )}
        </a>
      ) : (
        <a className="z-50 tablet:px-12">
          {header ? (
            <span className="inline text-primary font-semibold">{title}</span>
          ) : (
            <span className="inline text-primary font-semibold text-base font-header">
              {title}
            </span>
          )}
        </a>
      )}
    </Link>
  );
};

export const Paragraph = ({
  caption,
  hero,
  justify,
  body,
  project,
  children,
}) => {
  if (hero) {
    return (
      <Transition show={true} appear={true}>
        <Transition.Child
          enter="transition-all duration-500 delay-2000 ease-in-out"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p
            className={`font-body text-base max-w-sm laptop:max-w-lg tablet:pl-12 laptop:pl-36 tablet:text-lg desktop:text-xl ${
              body ? "mb-8 pr-6" : "my-4"
            } ${project && "mt-2 mb-4 pr-6"} ${
              caption && "italic text-gray-500 font-semibold pr-6"
            } ${justify && "text-justify"}`}
          >
            {children}
          </p>
        </Transition.Child>
      </Transition>
    );
  } else {
    return (
      <Transition show={true} appear={true}
      className='tablet:px-12'>
        <Transition.Child
          enter="transition-opacity duration-1000 delay-1200 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p
            className={`font-body text-base max-w-prose ${
              body ? "mb-8 pr-6" : "my-4"
            } ${project && "mt-2 mb-4 pr-6"} ${
              caption && "italic text-gray-500 font-semibold pr-6"
            } ${justify && "text-justify"}`}
          >
            {children}
          </p>
        </Transition.Child>
      </Transition>
    );
  }
};

export const ProjectTitle = ({ title, subtitle, image, alt, link }) => {
  return (
    <div className="mb-20 z-40">
      <span className="flex flex-col">
        {/* Image */}
        <div className="h-28 mobile-410:h-32 overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={image}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="rounded-tl-lg rounded-bl-lg"
            />
          </div>
        </div>

        {/* Header and subtitle */}
        <div className="flex flex-col mt-4">
          <span className={`font-header text-lg font-bold`}>{title}</span>
          <p className={`text-gray-500 text-sm max-w-prose mt-1 pr-6 mb-8`}>
            {subtitle}
          </p>
          <CustomLink url={link} title="Learn More." />
          {/* <Link href={link}>
            <span className={`text-primary text-xs w-max mt-8 pb-1 border-b-2 border-primary`}>
              Learn More.
            </span>
          </Link> */}
        </div>
      </span>
    </div>
  );
};
