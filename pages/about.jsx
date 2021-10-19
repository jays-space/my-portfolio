import React from "react";

//COMPONENTS
import { Content, ImageSection } from "../components/screen-utils.component";
import {
  CustomLink,
  Paragraph,
  SectionHeader,
  SubHeader,
} from "../components/text-utils.components";

const AboutPage = () => {
  return (
    <div className='screen flex flex-col'>
      {/* Header */}
      <SectionHeader>I design and build digital products.</SectionHeader>

      <Content>
        {/* Content */}

        {/* Profile image */}
        {/* <ImageSection src="/images/profile.png" alt="Profile picture" /> */}

        {/* Caption */}
        <Paragraph caption>
          I have always had a keen eye for spotting gaps, niches, and
          opportunities to develop challenges into novel, relevant, and
          meaningful products. My passion to create relevant products through
          software development enhances my ability to turn an idea into a
          tangible - value adding - product.
        </Paragraph>

        <Paragraph caption>
          Skills can always be taught, but character is intrinsic. I'm naturally
          inquisitive, quite confident, and I’m continuously working on
          improving my abilities, one challenge at a time.
        </Paragraph>

        {/* <Paragraph body>
        I am defined by the work that I have produced, as well as what I want to
        produce. The continual value add of my work moves on with me as my creativity
        and ideas grow.
      </Paragraph> */}

        <SubHeader>My Approach.</SubHeader>

        <span className="spacer my-1" />

        <Paragraph body>
          I believe it is important to understand both design and development to
          achieve a successful product. By involving a front-end developer at
          the design and prototyping phase, technical challenges can be
          identified rapidly, producing a more consistent product in the most
          efficient manner.
        </Paragraph>

        <Paragraph body>
          I am a strong supporter of producing prototypes before fully
          committing to coding. Each iteration of a prototype empowers the team
          to establish a continuous feedback loop from stakeholders about the
          product, at the soonest possible instance.
        </Paragraph>

        <Paragraph body>
          I am also experienced in building business logic systems, to interact
          with servers via APIs, using technologies such as React, React Redux,
          and Redux-Sagas.
        </Paragraph>

        {/* <Paragraph body>
        I find it rewarding to use my skills in contributing to building
        meaningful and relevant products that solve some of the societal
        challenges we face in local and global communities, especially with the
        advent of the fourth industrial revolution.
      </Paragraph> */}

        {/* <span className="spacer my-5" /> */}

        <CustomLink url="/contact" title="Let's Talk More." />
      </Content>
    </div>
  );
};

export default AboutPage;
