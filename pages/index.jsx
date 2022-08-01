import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";

//COMPONENTS
import {
  MainHeader,
  CTAButton,
  Paragraph,
  SubHeader,
  CustomLink,
} from "../components/text-utils.components";

export default function Home() {
  const [bgAnimated, setBgAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBgAnimated(true);
    }, 100);
  });

  const [copied, setCopied] = useState(false);
  const contentRef = useRef();

  const copyToClipboard = async () => {
    navigator.clipboard.writeText("contact.jays.space@gmail.com");
    let email = await navigator.clipboard.readText();

    if (email === "contact.jays.space@gmail.com") {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        {/* Hero section */}
        <section
          className={`fixed left-0 top-0 flex flex-col h-screen transition-transform duration-500`}
        >
          {/* Background image */}
          <img
            src="/images/hero_image.png"
            alt="man on moon"
            className="fixed left-0 top-0 w-screen h-screen object-cover bg-no-repeat"
          />

          {/* Background gradient and content */}
          <div
            className={`gradient flex flex-col w-screen h-screen justify-center z-20 hero-gradient bg-gradient-to-r from-black`}
          >
            <div className="flex flex-col w-screen h-screen ml-6 pr-6 mt-14 mobile-360:mt-20 mobile-375:mt-36 laptop:mt-48">
              <MainHeader greeting="Hi." noMargin>
                I'm <span className="text-primary">Jay</span>
              </MainHeader>
              <MainHeader stagger>Welcome to My Space</MainHeader>

              <span
                className={`flex h-12 w-12 justify-center items-center mx-auto z-40 mt-36 mobile-375:mt-60 mobile-410:mt-60 laptop:mt-40 desktop:mt-60 transition-opacity ease-in-out duration-700 cursor-pointer opacity-100`}
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
            </div>
          </div>
        </section>

        {/* about section */}
        <section className={`sticky flex flex-col min-h-screen`}>
          <div className="h-screen w-screen" />
          <div className="min-h-screen w-screen laptop:pt-48 z-50 transition-transform duration-500 bg-black">
            <img
              src="/images/my_profile.png"
              alt="Profile picture"
              className="profile_img tablet-md:rounded-lg w-80 mobile-360:w-screen tablet:w-auto"
            />

            <div className="px-6 pt-20">
              <SubHeader stagger>
                I design and build digital products.
              </SubHeader>
              <Paragraph>
                I’m a{" "}
                <span className="text-primary">FullStack AWS Developer</span>{" "}
                from Johannesburg, South Africa. I have a passion for ideating,
                designing and developing digital experiences - bringing ideas to
                life.
              </Paragraph>

              <Paragraph>
                I have always had a keen eye for spotting gaps, niches, and
                opportunities to develop challenges into novel, relevant, and
                meaningful products. My passion to create relevant products
                through software development enhances my ability to turn an idea
                into a tangible - value adding - product.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* contact section */}
        <section
          className={`sticky flex flex-col w-screen min-h-screen transition-transform duration-500 bg-black min-h-screen pt-20 laptop:pt-48`}
        >
          <div className="px-6">
            <SubHeader stagger>Get your space suit ready!</SubHeader>
            <Paragraph caption>
              I enjoy adding my collective experiences to a team where we can
              work together to develop solutions to business challenges.
            </Paragraph>
            <Paragraph body>
              Please feel free to reach out to me on any of the contacts below.
            </Paragraph>
            <ul>
              <li className="mb-2 py-1 w-max relative">
                <span
                  className="inline text-primary font-semibold text-base font-header cursor-pointer tablet:px-12 laptop:text-lg"
                  onClick={copyToClipboard}
                >
                  contact.jays.space@gmail.com
                </span>

                <span
                  className={`absolute bottom-8 right-0 bg-black p-2 text-xs cursor-pointer transition-opacity duration-300 ${
                    copied ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Copied to clipboard.
                </span>
              </li>
              <li className="my-2 py-1 w-max">
                <CustomLink
                  url="https://onedrive.live.com/download?cid=A9F3F801B0CA785E&resid=A9F3F801B0CA785E%21272&authkey=ACni6xK_dcdK7wA&em=2"
                  title="my resume"
                />
              </li>
              <li className="my-2 py-1 w-max">
                <CustomLink
                  newTab
                  url="https://www.linkedin.com/in/jay-mondlana-29644067/"
                  title="linkedIn"
                />
              </li>
              <li className="my-2 py-1 w-max">
                <CustomLink
                  newTab
                  url="https://github.com/jays-space"
                  title="github"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
