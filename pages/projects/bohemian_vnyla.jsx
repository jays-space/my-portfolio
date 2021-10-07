import React from "react";

//COMPONENTS
import {
  CustomScreen,
  ImageSection,
} from "../../components/screen-utils.component";
import {
  Paragraph,
  ProjectHeader,
  SubHeader,
} from "../../components/text-utils.components";

//IMAGES
import bohemian_vnyla_img from "../../public/images/bohemian_vnyla.png";

const BohemianVnylaPage = () => {
  return (
    <CustomScreen project>
      {/* Content */}

      {/* Header */}
      <ProjectHeader
        title='Bohemian VNYLA'
        subtitle='A nightlife experience management and curation app.'
        image={bohemian_vnyla_img}
        alt='bohemian vnyla'
      />

      {/* SubHeader */}
      <SubHeader project>Heading</SubHeader>
      <Paragraph body project>
        I'm often asked - and occasionally in an accusatory way - 'Are you
        atheist?' And it's like, 'You know, the only 'ist' I am is a scientist,
        all right?' I don't associate with movements. I'm not an 'ism.' I just -
        I think for myself.
      </Paragraph>

      {/* SubHeader */}
      <SubHeader project>Heading</SubHeader>
      <Paragraph body project>
        The universe is large and old, and the ingredients for life as we know
        it are everywhere, so there's no reason to think that Earth would be
        unique in that regard. Whether of not the life became intelligent is a
        different question, and we'll see if we find that.
      </Paragraph>

      <ImageSection project src={bohemian_vnyla_img} alt='image' />

      {/* SubHeader */}
      <SubHeader project>Heading</SubHeader>
      <Paragraph body project>
        You can't train kids in a world where adults have no concept of what
        science literacy is. The adults are gonna squash the creativity that
        would manifest itself, because they're clueless about what it and why it
        matters. But science can always benefit from the more brains there are
        that are thinking about it - but that's true for any field.
      </Paragraph>

      {/* SubHeader */}
      <SubHeader project>Heading</SubHeader>
      <Paragraph body project>
        The universe is large and old, and the ingredients for life as we know
        it are everywhere, so there's no reason to think that Earth would be
        unique in that regard. Whether of not the life became intelligent is a
        different question, and we'll see if we find that.
      </Paragraph>

      {/* SubHeader */}
      <SubHeader project>Heading</SubHeader>
      <Paragraph body project>
        You can't train kids in a world where adults have no concept of what
        science literacy is. The adults are gonna squash the creativity that
        would manifest itself, because they're clueless about what it and why it
        matters. But science can always benefit from the more brains there are
        that are thinking about it - but that's true for any field.
      </Paragraph>
    </CustomScreen>
  );
};

export default BohemianVnylaPage;
