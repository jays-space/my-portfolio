import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

//COMPONENTS
import {
  CustomLink,
  MainHeader,
  Paragraph,
} from "../components/text-utils.components";

export default function Landing() {
  const [heroSection, setHeroSection] = useState(false);
  const [navHidden, setNavHidden] = useState(true);

  const toggleHero = () => {
    setHeroSection(!heroSection);
  };

  const showNav = () => {
    setNavHidden(!navHidden);
  };

  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex`}>
        <main
          className={`w-screen bg-auto bg-no-repeat bg-center flex flex-col transition-transform duration-300 ease-in-out delay-300 ${
            navHidden ? "translate-x-0" : "-translate-x-2/3"
          } ${!heroSection ? "bg-primary" : "hero-wrapper"} `}
        >
          <div
            className={`${
              heroSection &&
              "hero-gradient bg-gradient-to-r from-black to-transparent"
            } flex flex-col pl-6 pr-6 pt-6 h-screen justify-center`}
          >
            {/* Intro screen */}
            {!heroSection && (
              <div className={`flex flex-col h-full justify-between`}>
                <div className="mt-32">
                  <MainHeader noMargin>
                    Creating amazing spaces one app at a time.
                  </MainHeader>
                </div>
                <span
                  className="mb-10 text-right text-xs text-gray-300"
                  onClick={toggleHero}
                >
                  {`Forward -->`}
                </span>
              </div>
            )}

            {/* Hero screen */}
            {heroSection && (
              <div className="flex flex-col h-full justify-between">
                {/* Hero section */}
                <section className="hero-section mt-2 mobile-360:mt-20 mobile-375:mt-36">
                  <div className="hero-section flex flex-col">
                    <span className="text-sm mb-1">Hello.</span>
                    <MainHeader noMargin>
                      I'm <CustomLink header url="/about" title="Jay." />
                    </MainHeader>
                    <MainHeader>Welcome to My Space</MainHeader>
                  </div>

                  {/* Blurb section */}
                  <div className="blurb-section mt-12 mobile-360:mt-14 sm:mt-16">
                    <Paragraph hero>
                      I’m a Front-End Developer located in Johannesburg, South
                      Africa. I have a passion for ideating, designing and
                      developing digital experiences - bringing ideas to life.
                    </Paragraph>
                  </div>
                </section>
              </div>
            )}
          </div>
        </main>

        <nav
          className={`flex items-center fixed h-screen w-2/3 right-0 bg-primary p-6 transition-transform duration-300 ease-in-out delay-300 ${
            navHidden ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <ul className="flex flex-col w-full">
            <Link href={"/about"}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-600 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0 transition-all duration-100"
                }`}
              >
                About.
              </li>
            </Link>
            <Link href={"/projects/"}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-700 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0  transition-all duration-100"
                }`}
              >
                Projects.
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-800 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0  transition-all duration-100"
                }`}
              >
                Contact.
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Nav buttons */}
      {heroSection && (
        <nav className="bubble fixed bottom-0 right-6 flex justify-end mb-6 items-center z-20">
          {/* <span onClick={toggleHero}> {`< -- Back`}</span> */}

          <span
            className={`fixed bottom-6 right-6 w-16 h-16 rounded-full transition-all duration-500 ease-in-out ${
              navHidden
                ? "bg-primary bubble-primary-active"
                : "bg-current"
            }`}
          />
          <span
            className={`fixed bottom-7 right-7 w-14 h-14 rounded-full bg-primary transition-colors duration-300 ease-in-out z-10`}
            onClick={showNav}
          />
        </nav>
      )}
    </div>
  );
}

{
  /* <Paragraph hero>
              I want to <CustomLink url="/projects/" title="show you around" />{" "}
              my space.
              <br />
              Let’s <CustomLink
                url="/contact"
                title=" start a conversation"
              />{" "}
              about some of the things we can do.
              </Paragraph> */
}
