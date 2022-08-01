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
        <span className="text-base mb-1 desktop:text-lg">
          {greeting}
        </span>
        <h1
          className={`font-header text-5xl mobile-410:text-5xl tablet:text-6xl tablet-md:text-7xl desktop:text-8xl tablet-lg:max-w-3xl desktop:max-w-6xl font-bold ${
            noMargin ? "" : "mt-4"
          }`}
        >
          {children}
        </h1>
      </Transition.Child>
    </Transition>
  );
};

// CTA Button
export const CTAButton = ({ noMargin, stagger, children }) => {
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
        <button
          className={`flex justify-center items-center px-4 py-2 font-header text-base mobile-410:text-base tablet:text-xl tablet-md:text-xl desktop:text-2xl tablet-lg:max-w-2xl desktop:max-w-2xl font-bold uppercase bg-primary ${
            noMargin ? "" : "mt-4"
          }`}
        >
          {children}
        </button>
      </Transition.Child>
    </Transition>
  );
};

export const SubHeader = ({ project, introHeader, children }) => {
  if (introHeader) {
    return (
      <Transition show={true} appear={true}>
        <Transition.Child
          enter="transition-all duration-1000 delay-1200 ease-in-out"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <h2
            className={`font-header font-bold tablet:px-12 text-3xl tablet:text-4xl mt-10 mb-4 tablet:mb-10 laptop:pl-12`}
          >
            {children}
          </h2>
        </Transition.Child>
      </Transition>
    );
  } else {
    return (
      <Transition show={true} appear={true}>
        <Transition.Child
          enter="transition-all duration-1000 delay-1200 ease-in-out"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <h3
            className={`font-header mb-2 font-bold tablet:px-12 ${
              project ? "text-2xl mt-16" : "text-2xl mt-10 laptop:pl-12"
            }`}
          >
            {children}
          </h3>
        </Transition.Child>
      </Transition>
    );
  }
};

export const ProjectHeader = ({ title, subtitle, image, alt }) => {
  return (
    <span className="flex flex-col h-screen mb-20 laptop:mb-40 mt-60 tablet:mt-80 align-middle pl-6 tablet:pl-16 laptop:pl-36 desktop:pl-64">
      {/* Header and subtitle */}
      <div className="flex flex-col mb-52">
        <span
          className={`font-header text-4xl mobile-410:text-5xl tablet:text-6xl tablet-md:text-7xl max-w-xs tablet-lg:max-w-3xl desktop:max-w-6xl font-bold`}
        >
          {title}
        </span>
        <p
          className={`text-primary text-sm tablet:text-base tablet-md:text-lg max-w-prose mt-4 pr-6`}
        >
          {subtitle}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-screen ">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-tl-lg rounded-bl-lg"
        />
      </div>
    </span>
  );
};

export const CustomLink = ({ url, title, header, newTab, noPadding }) => {
  return (
    <Link href={url}>
      {newTab ? (
        <a target="_blank" className={`z-50 ${!noPadding && "tablet:px-12"}`}>
          {header ? (
            <span className="inline text-primary font-semibold">{title}</span>
          ) : (
            <span className="inline text-primary font-semibold text-base laptop:text-lg font-header">
              {title}
            </span>
          )}
        </a>
      ) : (
        <a className={`z-50 ${!noPadding && "tablet:px-12"}`}>
          {header ? (
            <span className="inline text-primary font-semibold">{title}</span>
          ) : (
            <span className="inline text-primary font-semibold text-base laptop:text-lg font-header">
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
  projectIntro,
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
  } else if (projectIntro) {
    return (
      <Transition show={true} appear={true} className="tablet:px-12">
        <Transition.Child
          enter="transition-all duration-1000 delay-1200 ease-in-out"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p
            className={`font-body text-xl max-w-3xl laptop:text-2xl mt-2 mb-10 pr-6
              italic text-gray-500`}
          >
            {children}
          </p>
        </Transition.Child>
      </Transition>
    );
  } else {
    return (
      <Transition show={true} appear={true} className="tablet:px-12">
        <Transition.Child
          enter="transition-all duration-1000 delay-1200 ease-in-out"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p
            className={`font-body text-base min-w-min pr-10 mobile-360:max-w-screen-mobile-360  mobile-410:max-w-3xl laptop:text-lg ${
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
    <Transition show={true} appear={true}>
      <Transition.Child
        enter="transition-all duration-1000 delay-1200 ease-in-out"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="mb-20 z-40 tablet:pl-6 desktop:pl-72 cursor-pointer laptop:hover:translate-x-8 transition-transform duration-150 ease-out">
          <Link href={link}>
            <span className="flex flex-col">
              {/* Image */}
              <div className="w-screen max-w-3xl h-28 mobile-410:h-44 tablet:h-52 tablet-md:h-60 overflow-hidden">
                <div className="h-full relative">
                  <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tl-lg rounded-bl-lg tablet:rounded-lg"
                  />
                </div>
              </div>

              {/* Header and subtitle */}
              <div className="flex flex-col mt-4">
                <span
                  className={`font-header font-bold text-lg tablet:text-2xl`}
                >
                  {title}
                </span>
                <p
                  className={`text-gray-500 max-w-prose mt-1 pr-6 mb-8 tablet:text-lg desktop:text-xl`}
                >
                  {subtitle}
                </p>
                <CustomLink noPadding url={link} title="Learn More." />
              </div>
            </span>
          </Link>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export const ProjectTitleAlt = ({ title, subtitle, image, alt, link }) => {
  return (
    <div className="flex desktop:self-end mb-20 z-40 tablet:pl-6 cursor-pointer laptop:pr-20 hover:translate-x-8 laptop:hover:-translate-x-8 transition-transform duration-150 ease-out">
      <Link href={link}>
        <span className="flex flex-col desktop:items-end">
          {/* Image */}
          <div className="w-screen max-w-3xl h-28 mobile-410:h-44 tablet:h-52 tablet-md:h-60 overflow-hidden">
            <div className="h-full relative">
              <Image
                src={image}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-tl-lg rounded-bl-lg tablet:rounded-lg"
              />
            </div>
          </div>

          {/* Header and subtitle */}
          <div className="flex flex-col mt-4 laptop:items-end">
            <span
              className={`font-header font-bold text-lg tablet:text-2xl laptop:text-right`}
            >
              {title}
            </span>
            <p
              className={`text-gray-500 max-w-prose mt-1 pr-6 mb-8 tablet:text-lg desktop:text-xl laptop:text-right laptop:pr-0`}
            >
              {subtitle}
            </p>
            <CustomLink noPadding url={link} title="Learn More." />
          </div>
        </span>
      </Link>
    </div>
  );
};
