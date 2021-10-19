import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//COMPONENTS
import { MainHeader } from "../components/text-utils.components";

export default function Landing() {
  const route = useRouter();

  const navigateToHomePage = () => {
    route.push("/home");
  };
  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`flex flex-col h-screen justify-between bg-primary p-6 z-50`}
        onClick={navigateToHomePage}
      >
        <div className="mt-32">
          <MainHeader noMargin>
            Creating amazing spaces one app at a time.
          </MainHeader>
        </div>
        <span className="mb-5 text-center text-sm text-gray-300 animate-bounce">
          Tap on screen to continue.
        </span>
      </div>
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
