import React from "react";
import Image from "next/image";

export const CustomScreen = ({ project, children }) => {
  return (
    <div className='screen flex flex-col pl-6 pb-6 bg-black'>
      <CustomSection project={project}>{children}</CustomSection>
    </div>
  );
};

export const CustomSection = ({ project, children }) => {
  return (
    <section
      className={`h-full flex flex-col mb-4 ${project ? "mt-48" : "mt-60"}`}>
      {children}
    </section>
  );
};

export const ImageSection = ({ src, alt, project }) => {
  return (
    <div
      className={`${
        project ? "h-48 w-full mt-6 px-3" : "w-48 h-48 mt-8 mb-8"
      } items-center justify-center self-center mr-6 overflow-hidden`}>
      <div className='w-full h-full relative'>
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectFit='inherit'
          className='rounded-tl-lg rounded-bl-lg'
        />
      </div>
    </div>
  );
};
