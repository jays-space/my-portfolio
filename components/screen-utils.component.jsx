import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

export const Content = ({ project, children }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <section
      className={`content-section flex flex-col pl-6 items-start ${pathname !== '/projects' && "laptop:items-center"} laptop:mb-36 tablet:px-12 desktop:px-56 bg-black mb-1`}
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
    <Transition show={true} appear={true} className={pathname === '/projects' && 'w-full'}>
      <Transition.Child
        enter="transition-opacity duration-500 delay-300 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section
          className={`h-full w-full flex flex-col z-30 justify-start ${
            pathname !== "/projects/" && "laptop:justify-center"
          }`}
        >
          {children}
        </section>
      </Transition.Child>
    </Transition>
  );
};

export const ImageSection = ({ src, alt, project }) => {
  return (
    <div
      className={`${
        project ? "h-48 w-full mt-6 px-3" : "w-48 h-48 mt-8 mb-8"
      } items-center justify-center self-center mr-6 overflow-hidden`}
    >
      <div className="w-full h-full relative">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="inherit"
          className="rounded-tl-lg rounded-bl-lg"
        />
      </div>
    </div>
  );
};
