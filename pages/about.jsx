import React from "react";

//COMPONENTS
import {
  CustomScreen,
  ImageSection,
} from "../components/screen-utils.component";
import {
  CustomLink,
  Paragraph,
  SectionHeader,
  SubHeader,
} from "../components/text-utils.components";

const AboutPage = () => {
  return (
    <CustomScreen>
      {/* Content */}

      {/* Header */}
      <SectionHeader>I design and build digital products.</SectionHeader>

      {/* SubHeader */}
      <SubHeader>About me.</SubHeader>

      {/* Caption */}
      <Paragraph caption>
        I have always had a keen eye for identifying gaps/niches/opportunities
        in the environment and coming up with novel ways to turn those into
        relevant and meaningful products. It is then that I fell in love with
        programming – harnessing the ability to turn an idea into a tangible
        product whose aim is to offer value to the user.
      </Paragraph>

      {/* Profile image */}
      <ImageSection src='/images/profile.png' alt='Profile picture' />

      <Paragraph body>
        I define myself by the work I want to do and not only by the work have I
        done - skills can always be taught, however character is intrinsic. I'm
        naturally inquisitive, quite confident, and I’m continuously working on
        improving my abilities, one design, program, or product challenge at a
        time.
      </Paragraph>

      <Paragraph body>
        I believe it is important to understand both design and development to
        achieve a successful user-facing product. By involving a front-end
        developer at the design & prototyping phase, technical challenges can be
        identified rapidly, producing a more consistent product in the most
        efficient time.
      </Paragraph>

      <Paragraph body>
        I am a strong supporter of producing prototypes before fully committing
        to coding. Each iteration of these prototypes empower the team to
        establish a continuous feedback loop from stakeholders about the product
        and at the soonest possible instance, enabling rapid and relevant
        product development.
      </Paragraph>

      <Paragraph body>
        I am also experienced in building systems that implement business logic
        and interact with server-side technology via APIs using technologies
        such as React, React Redux, and Redux-Sagas.
      </Paragraph>

      <Paragraph body>
        My background in key account management, sales, product development and
        entrepreneurship enables me to …
      </Paragraph>

      <Paragraph body>
        I find it rewarding to use my skills in to contribution to building
        meaningful and relevant products that solve some of the societal
        challenges we face in local and global communities, especially with the
        advent of the fourth industrial revolution.
      </Paragraph>

      <span className='spacer my-5' />

      <CustomLink url='/contact' title="Let's Talk More." />
    </CustomScreen>
  );
};

export default AboutPage;
