import React from "react";
import { useState } from "react";
import Head from "next/head";

//COMPONENTS
import {
  MainHeader,
  CustomLink,
  Paragraph,
} from "../components/text-utils.components";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  const navBtnTap = () => {
    alert("tapped");
  };
  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="hero-wrapper bg-cover bg-no-repeat bg-center-right h-screen border-none flex flex-col">
        <div
          className={`hero-gradient bg-gradient-to-r from-black to-transparent flex flex-col pl-6 pr-6 
          pt-6 h-screen justify-center`}
        >
          {/* Hero section */}
          <div className="hero-section flex flex-col">
            {/* <span className="text-xs mb-1">Greetings traveller,</span>
            <MainHeader noMargin>
              I'm <CustomLink header url="/about" title="Jay." />
            </MainHeader> */}
            <MainHeader>Welcome to My Space</MainHeader>
          </div>

          {/* Blurb section */}
          <div className="blurb-section mt-10 mb-24">
            <Paragraph hero>
              I’m a Front-End Developer located in Johannesburg, South Africa. I
              have a passion for ideating, designing and developing digital
              experiences - bringing ideas to life.
            </Paragraph>

            {/* <Paragraph hero>
              I want to <CustomLink url="/projects/" title="show you around" />{" "}
              my space.
              <br />
              Let’s <CustomLink
                url="/contact"
                title=" start a conversation"
              />{" "}
              about some of the things we can do.
            </Paragraph> */}
          </div>

          {/* Nav button */}
          <span
            className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full"
            onClick={navBtnTap}
          />
        </div>
      </main>
    </div>
  );
}
