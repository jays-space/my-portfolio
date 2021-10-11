import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export const Greeting = ({ children }) => {
  return (
    <Transition show={true} appear={true}>
      <Transition.Child
        enter="transition-opacity duration-500 delay-1800 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span className="text-sm mb-1">{children}</span>
      </Transition.Child>
    </Transition>
  );
};

export const MainHeader = ({ noMargin, stagger, children }) => {
  return (
    <Transition show={true} appear={true}>
      <Transition.Child
        enter={`transition-all duration-1000 ease-in-out ${
          stagger ? "delay-800" : "delay-150"
        }`}
        enterFrom={`opacity-0 ${stagger ? "translate-y-4" : "translate-y-8"}`}
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <h1
          className={`font-header text-5xl font-bold ${noMargin ? "" : "mt-4"}`}
        >
          {children}
        </h1>
      </Transition.Child>
    </Transition>
  );
};

export const SectionHeader = ({ children }) => {
  const [scrolledToTop, setScrolledToTop] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  });

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset >= 100) {
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
    <Transition show={true} appear={true}>
      <Transition.Child
        enter={`transition-all duration-1000 ease-in-out delay-500`}
        enterFrom={`opacity-0 translate-y-8`}
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span className="flex flex-col justify-between">
          <h1 className={`font-header text-5xl font-bold mb-52`}>{children}</h1>
          {/* 
            //! scrolledToTop controlls opacity. Opacity cannot be controlled by both scrolledToTop and showArrow simultaneously. Set to hidden/visible in the meanwhile
            //TODO: Smooth animate the arrow on page mount 
          */}
          <span
            className={`fixed bottom-6 right-0 flex justify-end pr-6 mt-8 transition-opacity duration-500 ${
              scrolledToTop ? "opacity-0" : "opacity-100"
            } ${showArrow ? "flex" : "hidden"}`}
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
  );
};

export const SubHeader = ({ project, children }) => {
  return (
    <h3
      className={`font-header font-bold text-primary ${
        project ? "text-lg mt-8" : "text-2xl mt-6"
      }`}
    >
      {children}
    </h3>
  );
};

export const ProjectHeader = ({ title, subtitle, image, alt }) => {
  return (
    <span className="flex flex-col mb-16">
      {/* Header and subtitle */}
      <div className="flex flex-col mt-4 mb-12">
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
        <a target="_blank">
          {header ? (
            <span className="inline text-primary font-semibold">{title}</span>
          ) : (
            <span className="inline text-primary font-semibold text-base font-header">
              {title}
            </span>
          )}
        </a>
      ) : (
        <a>
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
          enter="transition-opacity duration-500 delay-1800 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
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
  } else {
    return (
      <Transition show={true} appear={true}>
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
    <div className="mb-20">
      <Link href={link}>
        <span className="flex flex-col">
          {/* Image */}
          <div className="h-28 overflow-hidden">
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
            <p className={`text-primary text-sm max-w-prose mt-1 pr-6`}>
              {subtitle}
            </p>
          </div>
        </span>
      </Link>
    </div>
  );
};
