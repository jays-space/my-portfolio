import React, { useRef } from "react";
import Head from "next/head";

//COMPONENTS
import {
  SectionHeader,
  Content,
} from "../../components/screen-utils.component";
import {
  ProjectTitle,
  ProjectTitleAlt,
  SubHeader,
} from "../../components/text-utils.components";

//IMAGES
import bohemian_vnyla_img from "../../public/images/bohemian_vnyla.png";

const ProjectsPage = () => {
  const contentRef = useRef();

  return (
    <div>
      <Head>
        <title>jays.space | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="scroll-container container flex flex-col w-screen">
        {/* Header */}
        {/* <SectionHeader>I design and build digital products.</SectionHeader> */}
        <SectionHeader contentRef={contentRef}>Selected Works.</SectionHeader>

        <section ref={contentRef} className="content-section">
          <Content>
            {/* SubHeader */}
            {/* <SubHeader>Selected Works.</SubHeader> */}

            {/* Spacer */}
            {/* <span className="spacer my-12" /> */}

            {/* Projects - BV */}
            <ProjectTitle
              link="../projects/bohemian_vnyla"
              image={bohemian_vnyla_img}
              alt="bohemian vnyla"
              title="Bohemian VNYLA"
              subtitle="A nightlife curation and management app."
            />

            {/* Projects - BV */}
            <ProjectTitle
              link="../projects/bohemian_vnyla"
              image={bohemian_vnyla_img}
              alt="bohemian vnyla"
              title="Bohemian VNYLA"
              subtitle="A nightlife curation and management app."
            />
          </Content>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
