import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

//COMPONENTS
import {
  MainHeader,
  CustomLink,
  Paragraph,
} from "../components/text-utils.components";

export default function Home() {
  const [navHidden, setNavHidden] = useState(true);

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
        {/* Background image */}
        <main
          className={`hero-wrapper w-screen bg-cover bg-no-repeat bg-center flex flex-col transition-transform duration-300 ease-in-out delay-300 ${
            navHidden ? "translate-x-0" : "-translate-x-2/3"
          }`}
        >
          {/*
            //* hero section overlay: the contrast between the image and blurb text makes is such that the text is hard to read
          */}
          <div
            className={`fixed left-0 top-0 bg-black w-screen h-screen opacity-40 `}
          />

          {/* Background gradient */}
          <div
            className={`flex flex-col pl-6 pr-6 pt-6 h-screen justify-center z-20 hero-gradient bg-gradient-to-r from-black`}
          >
            {/*
              //* hero section darkens when nav is open
              //! Cannot access elements on screen (other than nav btns) because the z-index is higher
             */}
            <div
              className={`darken-on-nav-active fixed left-0 top-0 bg-black w-screen h-screen z-10 transition-opacity duration-300 delay-300 ${
                navHidden ? "opacity-0" : "opacity-80"
              }`}
            />

            <div className="flex flex-col h-full justify-between">
              {/* Hero section */}
              <section
                className={`hero-section mt-2 mobile-360:mt-20 mobile-375:mt-36 transition-transform duration-500`}
              >
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
          </div>
        </main>

        {/* Navigation section */}
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

      <nav className="bubble fixed bottom-0 right-6 flex justify-end mb-6 items-center">
        <span className="fixed bottom-11 left-6">          
          <Link href="/">
            <a>{`< -- Back`}</a>
          </Link>
        </span>

        {/* 
            //* Bubble sits behind the button - controls the effect that occures when the button is pressed 
          */}
        <span
          className={`bubble fixed bottom-6 right-6 w-16 h-16 rounded-full transition-all duration-500 ease-in-out ${
            navHidden ? "bg-primary bubble-primary-active" : "bg-current"
          }`}
        />
        <span
          className={`fixed bottom-7 right-7 w-14 h-14 rounded-full bg-primary transition-colors duration-300 ease-in-out z-10`}
          onClick={showNav}
        />
      </nav>
    </div>
  );
}
