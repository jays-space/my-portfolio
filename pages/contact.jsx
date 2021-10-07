import React from "react";

//COMPONENTS
import { CustomScreen } from "../components/screen-utils.component";
import {
  CustomLink,
  Paragraph,
  SectionHeader,
  SubHeader,
} from "../components/text-utils.components";

const ContactPage = () => {
  return (
    <CustomScreen>
      {/* Header */}
      <SectionHeader>Let's make something special!</SectionHeader>

      {/* SubHeader */}
      <SubHeader>Contact.</SubHeader>

      {/* Caption */}
      <Paragraph caption>
        I'm seeking out opportunities to collaborate and work with companies /
        agencies / individuals. I enjoy adding my collective experiences to a
        team where we can work together to develop solutions to business
        challenges.
      </Paragraph>

      <Paragraph body>
        Please feel fre to reach out to me on any of the contacts below.
      </Paragraph>

      <ul>
        <li className='mb-2 py-1 w-max'>
          <CustomLink url='#link' title='contact.jays.space@gmail.com' />
        </li>
        <li className='my-2 py-1 w-max'>
          <CustomLink url='#link' title='my resume' />
        </li>
        <li className='my-2 py-1 w-max'>
          <CustomLink url='#link' title='linkedIn' />
        </li>
        <li className='my-2 py-1 w-max'>
          <CustomLink url='#link' title='github' />
        </li>
      </ul>
    </CustomScreen>
  );
};

export default ContactPage;
