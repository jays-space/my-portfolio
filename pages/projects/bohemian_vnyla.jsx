import React from "react";
import Head from "next/head";

//COMPONENTS
import { Content, ImageSection } from "../../components/screen-utils.component";
import {
  Paragraph,
  ProjectHeader,
  SubHeader,
} from "../../components/text-utils.components";

//IMAGES
import bohemian_vnyla_img from "../../public/images/bohemian_vnyla.png";

const BohemianVnylaPage = () => {
  return (
    <div>
      <Head>
        <title>jays.space | Bohemian VNYLA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="screen flex flex-col w-screen">
        <ProjectHeader
          title="Bohemian VNYLA"
          subtitle="A nightlife experience management and curation app."
          image={bohemian_vnyla_img}
          alt="bohemian vnyla"
        />

        <Content project>
          {/* Content */}

          {/* SubHeader */}
          <SubHeader introHeader>Bohemain VNYLA</SubHeader>
          <Paragraph projectIntro>
            Bohemian VNYLA is a digital lifestyle curation service that provides
            members access to entertainment and leisure experiences, offering
            advice, management services, VIP access and benefits - all without
            breaking the bank.
          </Paragraph>

          {/* summary */}
          <Paragraph body project>
            Bohemian VNYLA is my idea that began as a side project in late 2019
            to close out a lack of variety in night-time entertainment
            experiences.
          </Paragraph>

          {/* SubHeader */}
          <Paragraph body project>
            As a young person and an avid lover of going out at night and
            spending time with friends and loved ones, travelling and meeting
            different people my experiences did not meet my expectation to
            accessing extertainment spaces that I would dream about. In 2019 I
            began to get dissatisfied with how anxious I personally would get
            over the prospect of having to look for and validate new experiences
            before committing time and money to visiting them. "Consumer regret"
            sets in pretty quickly if reality does not meet expectation.
          </Paragraph>

          <ImageSection project src={bohemian_vnyla_img} alt="image" />

          {/* SubHeader */}
          <SubHeader project>Problem Definition</SubHeader>
          <Paragraph body project>
            After some initial research, I hypothesised that homogeneous
            experiences across varying geo-demographic locales and segments
            would consistently be produced to meet a market demand that was
            based on consumers' fear of going out new and novel experiences.
            <br />
            <span className="text-red-500">
              Consumers from this segment justify their behaviour for monotonous
              experiecnes by seeing other consumers making decisions to continue
              to flock to the same spaces and experiences.
            </span>
          </Paragraph>

          <Paragraph body project>
            I also discovered that there was little to no formal research that
            described night-time entertainement activities, much less commercial
            activities. However I did find that the entertainment industry as a
            whole - inclusive of supporting industries such as transportation,
            liquor production, and security - accounted for a large portion of
            GDP.
          </Paragraph>

          {/* SubHeader */}
          <SubHeader project>Research</SubHeader>
          <Paragraph body project>
            After quizzing a number of people I would meet while out, I formed
            an inital hypothesis: to mitigate consumer doubt and anxiety over
            seleting and going to nighttime experiences, most people who go out
            are weary of new experiences and prefer to visit places that have
            already been validated.
          </Paragraph>

          <Paragraph body project>
            This was also at a time when social media platforms were producing
            prolific and extremely infulencial content creators who often depict
            a lifestyle that most could not realistically live out in a
            consistent manner. Ironically, this did not stop individuals from
            attempting to nonetheless. A fair sized number of this segment also
            developed FOMO: Fear of missing out.
          </Paragraph>

          {/* SubHeader */}
          <SubHeader project>Hypotheses</SubHeader>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>
                Venue managers, promoters and other producers justify higher
                access prices through their lack of assurance about how much
                they may generate per session per consumer. This is because they
                are not certain about how many people will turn up to their
                productions.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers are used to traditional payment platforms and have
                little propensity to trust digital payment platforms.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers find it difficult to trust agencies that provide
                information about which experiences to go to and what to expect
                from those experiences.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers will trust an authority figurehead that commands
                infulence in the industry to provide consumers to access to
                specific experiences where a standardized set of expectations
                can be guaranteed.
              </li>
            </Paragraph>
          </ul>

          {/* SubHeader */}
          <SubHeader project>Website Validation</SubHeader>
          <Paragraph body project>
            In collaboration with a production for a concert, a website was
            developed to communicate the core idea, provide access packages for
            the concert, as well as to stir up consumer coversation about what
            value add the product may be to users. A brand identity that
            enthused sincerity, authority, momentum and minimalism was created
            to communicate our mission and product with the audience.
          </Paragraph>

          <Paragraph body project>
            The website was developed using HTML, CSS, Bootstrap and JavaScript.
          </Paragraph>

          {/* SubHeader */}
          <SubHeader project>Validation Data</SubHeader>
          <Paragraph body project>
            <span className="text-yellow-400">
              To test each hypothesis, a set of KPI's to measure against were
              decided. Having partnered with a production for a concert, we were
              able to begin to describe a set of data rewuirements that were
              needed to justify the designing of curated productions as well as
              access packages.
            </span>
          </Paragraph>
          <Paragraph body project>
            <span className="text-yellow-400">
              To establish credibility, affiliations with the production company
              and the concert were displayed on the website as well as social
              media. Through word-of-mouth and social media, consumers who were
              fans of the production company or were interested in the concert
              were directed to the website which was the sole digital platform
              to purchase tickets.
            </span>
          </Paragraph>
          <Paragraph body project>
            <span className="text-yellow-400">
              After four weeks of deployment there were over 4800 unique
              visitors to the website, approximately 300 email queries about the
              service, over 800 access package queries and 24 access package
              sales.
            </span>
          </Paragraph>
          <Paragraph body project>
            <span className="text-yellow-400">
              During and after the concert, consumers at who visited the concert
              were asked about their sentiments about the service, access
              packaging and digital payment platforms. It was further discovered
              that:
            </span>
          </Paragraph>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>
                A significant number of consumers bought tickets at the door on
                the night of the concert.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers who bought curated packages and those who bought door
                tickets spent similar amounts on food and beverages.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers who bought door tickets wanted VIP access package
                benefits when they saw the other consumers enjoying curated
                benefits.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers had been intimidated by the strong visual image of the
                website and belived that the service was "above them" or beyond
                their scope of affirdability.
              </li>
            </Paragraph>
          </ul>

          {/* SubHeader */}
          <SubHeader project>Core Product</SubHeader>
          <Paragraph body project>
            <span className="text-yellow-400">
              Since then, we have collaborated with venue managers, music
              artists and promoters to provide consumer activity and behavior
              data. We are currently in the process of improving, iterating and
              most importantly learning to making sure our members as well as
              enternatinment managers are satisfied.
            </span>
          </Paragraph>

          {/* SubHeader */}
          <SubHeader project>Development</SubHeader>
          <Paragraph body project>
            You can't train kids in a world where adults have no concept of what
            science literacy is. The adults are gonna squash the creativity that
            would manifest itself, because they're clueless about what it and
            why it matters. But science can always benefit from the more brains
            there are that are thinking about it - but that's true for any
            field.
          </Paragraph>

          {/* SubHeader */}
          <SubHeader project>What's Next/Final Thoughts</SubHeader>
          <Paragraph body project>
            <span className="text-yellow-400">
              After validating my hypothesis, I set out to build the app.
              However, due to Covid-19, I had to set aside the project.
              Nonetheless, I used the project as an engineering learning
              experience.
            </span>
          </Paragraph>
        </Content>
      </div>
    </div>
  );
};

export default BohemianVnylaPage;
