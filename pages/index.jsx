import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Transition } from "@headlessui/react";

//COMPONENTS
import {
  MainHeader,
  CustomLink,
  Paragraph,
  Greeting,
} from "../components/text-utils.components";

export default function Home() {
  const [navHidden, setNavHidden] = useState(true);
  const [bgAnimated, setBgAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBgAnimated(true);
    }, 100);
  });

  const showNav = () => {
    setNavHidden(!navHidden);
  };

  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home h-screen">
        {/* Background image */}
        <div
          className={`fixed left-0 top-0 w-screen h-full bg-cover bg-center bg-no-repeat z-n1 ${
            bgAnimated === true ? "hero-wrapper--animated" : "hero-wrapper"
          }`}
        />

        {/* Background gradient and content */}
        <div
          className={`gradient-and-content flex flex-col h-full pl-6 pr-6 pt-6 justify-center z-20 hero-gradient bg-gradient-to-r from-black`}
        >
          {/* Hero section */}
          <section
            className={`hero-section flex flex-col h-full mt-14 mobile-360:mt-20 mobile-375:mt-36 transition-transform duration-500`}
          >
            <div className="hero-section flex flex-col">
              <Greeting>Hello.</Greeting>
              <MainHeader noMargin>
                I'm <CustomLink header url="/about" title="Jay." />
              </MainHeader>
              <MainHeader stagger>Welcome to My Space</MainHeader>
            </div>

            {/* Blurb section */}
            <div className="blurb-section mt-12 mobile-360:mt-14 sm:mt-16">
              <Paragraph hero>
                I’m a Front-End Developer located in Johannesburg, South Africa.
                I have a passion for ideating, designing and developing digital
                experiences - bringing ideas to life.
              </Paragraph>
            </div>
          </section>

          {/*
            //* hero section overlay: the contrast between the image and blurb text makes is such that the text is hard to read
          */}
          <div
            className={`fixed left-0 top-0 bg-black w-screen h-full opacity-40 z-n1`}
          />
        </div>
      </main>
    </div>
  );
}


// import React from "react";
// import Head from "next/head";
// import { useRouter } from "next/router";

// //COMPONENTS
// import { MainHeader } from "../components/text-utils.components";

// export default function Landing() {
//   const route = useRouter();

//   const navigateToHomePage = () => {
//     route.push("/home");
//   };
//   return (
//     <div>
//       <Head>
//         <title>jays.space</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div
//         className={`flex flex-col h-screen justify-between bg-primary p-6 z-50`}
//         onClick={navigateToHomePage}
//       >
//         <div className="mt-32">
//           <MainHeader noMargin>
//             Creating amazing spaces one app at a time.
//           </MainHeader>
//         </div>
//         <span className="mb-5 text-center text-sm text-gray-300 animate-bounce">
//           Tap on screen to continue.
//         </span>
//       </div>
//     </div>
//   );
// }

// {
//   /* <Paragraph hero>
//               I want to <CustomLink url="/projects/" title="show you around" />{" "}
//               my space.
//               <br />
//               Let’s <CustomLink
//                 url="/contact"
//                 title=" start a conversation"
//               />{" "}
//               about some of the things we can do.
//               </Paragraph> */
// }
