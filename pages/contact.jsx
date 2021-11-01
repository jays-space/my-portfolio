import React, { useRef, useState } from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";

//COMPONENTS
import { SectionHeader, Content } from "../components/screen-utils.component";
import {
  CustomLink,
  Paragraph,
  SubHeader,
} from "../components/text-utils.components";

const ContactPage = () => {
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
    <div>
      <Head>
        <title>jays.space | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex flex-col w-screen">
        {/* Header */}
        <SectionHeader contentRef={contentRef}>
          Let's make something special!
        </SectionHeader>

        <section ref={contentRef} className="content-section">
          <Content>
            {/* Caption */}
            <Paragraph caption>
              I'm seeking out opportunities to collaborate and work with
              companies / agencies / individuals. I enjoy adding my collective
              experiences to a team where we can work together to develop
              solutions to business challenges.
            </Paragraph>

            <Paragraph body>
              Please feel free to reach out to me on any of the contacts below.
            </Paragraph>

            <Transition show={true} appear={true} className="z-40">
              <Transition.Child
                enter="transition-all duration-1000 delay-1200 ease-in-out"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ul>
                  <li className="mb-2 py-1 w-max relative">
                    <span
                      className="inline text-primary font-semibold text-base font-header tablet:px-12 laptop:text-lg"
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
                    <CustomLink url="https://onedrive.live.com/download?cid=A9F3F801B0CA785E&resid=A9F3F801B0CA785E%21272&authkey=ACni6xK_dcdK7wA&em=2" title="my resume" />
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
              </Transition.Child>
            </Transition>
          </Content>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
