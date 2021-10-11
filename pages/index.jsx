import React from "react";
import Head from "next/head";
import Link from "next/link";

//COMPONENTS
import { MainHeader } from "../components/text-utils.components";

export default function Landing() {
  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-col h-screen justify-between bg-primary p-6`}>
        <div className="mt-32">
          <MainHeader noMargin>
            Creating amazing spaces one app at a time.
          </MainHeader>
        </div>
        <span className="mb-5 text-right text-xs text-gray-300">
          <Link href="/home">
            <span className="fixed right-6 animate-ping h-6 w-6 rounded-full bg-current opacity-75"></span>
          </Link>
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
