import React, { useRef } from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";

//COMPONENTS
import { SectionHeader, Content } from "../components/screen-utils.component";
import {
  CustomLink,
  Paragraph,
  SubHeader,
} from "../components/text-utils.components";

const AboutPage = () => {
  const contentRef = useRef();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div>
      <Head>
        <title>jays.space | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="scroll-container container flex flex-col w-screen">
        {/* Header */}
        <SectionHeader contentRef={contentRef}>
          I design and build digital products.
        </SectionHeader>

        <section ref={contentRef} className="content-section">
          <Content>
            {/* Content */}

            {/* Profile image */}
            <div className="profile_img_wrapper flex justify-center mb-20 ">
              <img
                src="/images/my_profile.png"
                alt="Profile picture"
                className="profile_img rounded-md tablet-md:rounded-lg w-80 mobile-360:w-96 tablet:w-auto"
              />
            </div>

            {/* Caption */}
            <Paragraph caption>
              I have always had a keen eye for spotting gaps, niches, and
              opportunities to develop challenges into novel, relevant, and
              meaningful products. My passion to create relevant products
              through software development enhances my ability to turn an idea
              into a tangible - value adding - product.
            </Paragraph>

            <Paragraph caption>
              Skills can always be taught, but character is intrinsic. I'm
              naturally inquisitive, quite confident, and I’m continuously
              working on improving my abilities.
            </Paragraph>

            <SubHeader>My Approach.</SubHeader>

            <span className="spacer my-1" />

            <Paragraph body>
              I believe it is important to understand both design and
              development to achieve a successful product. By involving a
              front-end developer at the design and prototyping phase, technical
              challenges can be identified rapidly, producing a more consistent
              product in the most efficient manner.
            </Paragraph>

            <Paragraph body>
              I am a strong supporter of producing prototypes before fully
              committing to coding. Each iteration of a prototype empowers a
              team to establish a continuous feedback loop from stakeholders at
              the soonest possible instance.
            </Paragraph>

            <Paragraph body>
              I am also experienced in building business logic systems, to
              interact with servers via APIs, using technologies such as React,
              React Redux, and Redux-Saga.
            </Paragraph>

            <Transition show={true} appear={true}>
              <Transition.Child
                enter="transition-all duration-1000 delay-1200 ease-in-out"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <CustomLink url="/contact" title="Let's Talk More." />
              </Transition.Child>
            </Transition>
          </Content>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
