import React from "react";
import Link from "next/link";
import Image from "next/image";

export const MainHeader = ({ noMargin, children }) => {
  return (
    <h1 className={`font-header text-5xl font-bold ${noMargin ? "" : "mt-4"}`}>
      {children}
    </h1>
  );
};

export const SectionHeader = ({ children }) => {
  return <h1 className={`font-header text-5xl font-bold mb-52`}>{children}</h1>;
};

export const SubHeader = ({ project, children }) => {
  return (
    <h3
      className={`font-header font-bold text-primary ${
        project ? "text-lg mt-8" : "text-2xl mt-6"
      }`}>
      {children}
    </h3>
  );
};

export const ProjectHeader = ({ title, subtitle, image, alt }) => {
  return (
    <span className='flex flex-col mb-16'>
      {/* Header and subtitle */}
      <div className='flex flex-col mt-4 mb-12'>
        <span className={`font-header text-4xl font-bold`}>{title}</span>
        <p className={`text-primary text-sm max-w-prose mt-4 pr-6`}>
          {subtitle}
        </p>
      </div>

      {/* Image */}
      <div className='h-56 overflow-hidden'>
        <div className='w-full h-full relative'>
          <Image
            src={image}
            alt={alt}
            layout='fill'
            objectFit='cover'
            className='rounded-tl-lg rounded-bl-lg'
          />
        </div>
      </div>
    </span>
  );
};

export const CustomLink = ({ url, title, header }) => {
  return (
    <Link href={url}>
      <a>
        {header ? (
          <span className='inline text-primary font-semibold'>{title}</span>
        ) : (
          <span className='inline text-primary font-semibold text-base font-header'>
            {title}
          </span>
        )}
      </a>
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
  return (
    <p
      className={`font-body text-base max-w-prose ${
        body ? "mb-8 pr-6" : "my-4"
      } ${project && "mt-2 mb-4 pr-6"} ${
        caption && "italic text-gray-500 font-semibold pr-6"
      } ${justify && "text-justify"}`}>
      {children}
    </p>
  );
};

export const ProjectTitle = ({ title, subtitle, image, alt, link }) => {
  return (
    <div className='mb-20'>
      <Link href={link}>
        <span className='flex flex-col'>
          {/* Image */}
          <div className='h-28 overflow-hidden'>
            <div className='w-full h-full relative'>
              <Image
                src={image}
                alt={alt}
                layout='fill'
                objectFit='cover'
                className='rounded-tl-lg rounded-bl-lg'
              />
            </div>
          </div>

          {/* Header and subtitle */}
          <div className='flex flex-col mt-4'>
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
