import React from "react";

//COMPONENTS
import { CustomScreen } from "../../components/screen-utils.component";
import { ProjectTitle, SectionHeader, SubHeader } from "../../components/text-utils.components";

//IMAGES
import bohemian_vnyla_img from "../../public/images/bohemian_vnyla.png";

const ProjectsPage = () => {
  return (
    <CustomScreen>
      {/* Header */}
      <SectionHeader>I design and build digital products.</SectionHeader>

      {/* SubHeader */}
      <SubHeader>Selected Works.</SubHeader>

      {/* Spacer */}
      <span className='spacer my-4' />

      {/* Projects - BV */}
      <ProjectTitle
        link='../projects/bohemian_vnyla'
        image={bohemian_vnyla_img}
        alt='bohemian vnyla'
        title='Bohemian VNYLA'
        subtitle='A nightlife experience management and curation app.'
      />
    </CustomScreen>
  );
};

export default ProjectsPage;
