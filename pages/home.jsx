import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

//COMPONENTS
import {
  MainHeader,
  CustomLink,
  Paragraph,
  Greeting,
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
          className={`hero-wrapper w-screen bg-cover bg-no-repeat bg-center flex flex-col `}
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
            <div className="flex flex-col h-full justify-between">
              {/* Hero section */}
              <section
                className={`hero-section mt-2 mobile-360:mt-20 mobile-375:mt-36 transition-transform duration-500`}
              >
                <div className="hero-section flex flex-col">
                  <Greeting>Hello.</Greeting>
                  <MainHeader noMargin>
                    I'm <CustomLink header url="/about" title="Jay." />
                  </MainHeader>
                  <MainHeader stagger>Welcome to My Space</MainHeader>
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
      </div>
    </div>
  );
}
