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
            its members access to entertainment and leisure experiences,
            offering advice, management services, VIP access and benefits - all
            without breaking the bank.
          </Paragraph>
          {/* summary */}
          <Paragraph body project>
            Bohemian VNYLA is an idea that began as a side project in late 2019
            to close out a lack of variety in night-time entertainment
            experiences.
          </Paragraph>
          {/* SubHeader */}
          <Paragraph body project>
            As a young person and an avid lover of going out at night and
            spending time with friends and loved ones, travelling and meeting
            different people my experiences did not meet my expectation to
            accessing entertainment spaces that I would dream about. In 2019 I
            began to get dissatisfied with how anxious I personally would get
            over the prospect of having to look for and validate new experiences
            before committing time and money to visiting them. "Consumer regret"
            sets in pretty quickly if reality does not meet expectation.
          </Paragraph>
          <ImageSection project src={bohemian_vnyla_img} alt="image" />
          {/* SubHeader */}
          <SubHeader project>Problem Definition</SubHeader>
          <Paragraph body project>
            After some initial research, it was hypothesised that homogeneous
            experiences across varying geo-demographic locales and segments
            would consistently be produced to meet a market demand that was
            based on consumers' fear of going out to discover new and novel
            experiences. Consumers in this segment seem to justify their
            continued demand for monotonous experiences by observing other
            consumers making decisions to continue following the same spaces and
            experiences.
          </Paragraph>
          <Paragraph body project>
            It was discovered that there was little to no formal research to
            describe night-time entertainement activities, much less commercial
            activities. However it was found that the entertainment industry as
            a whole - inclusive of supporting industries such as transportation,
            liquor production, and security to name a few - accounted for a
            large portion of the Gross Domestic Product (GDP).
          </Paragraph>
          {/* SubHeader */}
          <SubHeader project>Research</SubHeader>
          <Paragraph body project>
            Responses from a random sample of consumers in the segment led to
            the formation of an initial hypothesis: to mitigate their doubts and
            anxieties when selecting and going to night-time experiences from a
            list of alternatives, most consumers prefer to re-visit places and
            experiences that they are already familiar with or places that have
            previously been validated by others.
          </Paragraph>
          <Paragraph body project>
            At that time social media platforms had begun producing prolific and
            increasingly more influencial content creators who often depict a
            lifestyle that most could not live out consistently. Ironically,
            this did not stop consumers in this segement from attempting to,
            nonetheless. A fair sized number of this segment also developed a
            "Fear Of Missing Out" (FOMO).
          </Paragraph>
          {/* SubHeader */}
          <SubHeader project>Hypotheses</SubHeader>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>
                Venue managers, promoters and other producers justify higher
                access prices through their lack of assurance about how much
                they may generate per experience per consumer. This is because
                they are not certain about how many people will turn up to their
                productions.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Venue managers, promoters and other producers will take better
                calculated risks in producing more differenciated experiences
                for a more predictable consumer market.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Pre the Covid-19 pandemic, consumers were used to "traditional"
                payment platforms and had little propensity to trust digital
                payment platforms.
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
                infulence in the industry to provide access to specific
                experiences where expectations meet a guaranteed set of
                standards.
              </li>
            </Paragraph>
          </ul>
          {/* SubHeader */}
          <SubHeader project>Website Validation</SubHeader>
          <Paragraph body project>
            To test the set of hypotheses, in collaboration with a production
            for a concert, a website (Bohemian VNYLA) was developed to
            communicate the core idea, provide access packages for the concert,
            as well as to stir up conversation about what value-add the product
            may be to users. A brand identity that enthused sincerity,
            authority, momentum and minimalism was created to communicate the
            mission and product with the audience.
          </Paragraph>
          <Paragraph body project>
            The website was developed using HTML, CSS, Bootstrap and JavaScript.
          </Paragraph>
          {/* SubHeader */}
          <SubHeader project>Validation Data</SubHeader>
          <Paragraph body project>
            To further test consumer specific hypotheses, a set of KPI's were
            established. Having partnered with a production for a concert, a
            description of a set of data requirements, that were needed to
            justify the designing of curated productions as well as access
            packages, was developed.
          </Paragraph>
          <Paragraph body project>
            To establish credibility, affiliations with the production company
            and the concert were displayed on the website as well as social
            media. Through word-of-mouth and social media, consumers who were
            fans of the production company or were interested in the concert
            were directed to the website which was the sole digital platform to
            purchase tickets.
          </Paragraph>
          <Paragraph body project>
            After four weeks of deployment there were over 4800 unique visitors
            to the website, approximately 300 email queries about the service,
            over 800 access package queries and about 25 access package sales.
          </Paragraph>
          <Paragraph body project>
            During and after the concert, consumers who visited the concert were
            asked for sentiments about the service, access packaging and digital
            payment platforms. It was further discovered that:
          </Paragraph>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>
                A significant number of consumers purchased tickets at the door
                on the night of the concert.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers who purchased door tickets demanded similar curated
                access when observing the benefits of purchasing access through
                the Bohemian VNYLA website.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                Consumers were initially under the impression that the service
                provided by Bohemian VNYLA was "above them" or beyond their
                scope of affordability.
              </li>
            </Paragraph>
          </ul>
          {/* SubHeader */}
          <SubHeader project>Core Product</SubHeader>
          <Paragraph body project>
            A Minimum Viable Product (MVP) was conceptualised based on the
            observations made. This MVP consisted of:
          </Paragraph>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>
                A curated list of products by venue managers, events managers,
                promoters and other producers.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                A 'back-end' application which enables producers to upload the
                products. Producers also have access to industry consumer
                behavioural data and purchase trends.
              </li>
            </Paragraph>
            <Paragraph body project>
              <li>
                A mobile application that enables consumer access to the
                products.
              </li>
            </Paragraph>
          </ul>
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
          <SubHeader project>What's Next</SubHeader>
          <ul className="list-disc list-outside pl-10 max-w-3xl">
            <Paragraph body project>
              <li>Backend application usability testing</li>
            </Paragraph>
            <Paragraph body project>
              <li>Mobile app design and development</li>
            </Paragraph>
            <Paragraph body project>
              <li>Initiate deployment strategy</li>
            </Paragraph>
          </ul>
        </Content>
      </div>
    </div>
  );
};

export default BohemianVnylaPage;

{
  /* <span className="text-yellow-400">
              After validating my hypothesis, I set out to build the app.
              However, due to Covid-19, I had to set aside the project.
              Nonetheless, I used the project as an engineering learning
              experience.
            </span> */
}

{
  /* 
              Since then, we have collaborated with venue managers, music
              artists and promoters to provide consumer activity and behavior
              data. We are currently in the process of improving, iterating and
              most importantly learning to making sure our members as well as
              enternatinment managers are satisfied.
            </span> */
}
