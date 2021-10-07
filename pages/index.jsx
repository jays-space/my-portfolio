import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";

//COMPONENTS
import {
  MainHeader,
  CustomLink,
  Paragraph,
} from "../components/text-utils.components";

export default function Home() {
  const [showBio, setShowBio] = useState(false);
  // const [seconds, setSeconds] = useState("00");
  // const [milliseconds, setMilliseconds] = useState("00");

  // useEffect(() => {
  // setInterval(() => {
  //   const date = new Date();
  //   const s = date.toLocaleString();
  //   setSeconds(s);
  // }, 1000);
  // });

  // useEffect(() => {
  //   let timeLeft = 3;
  //   const timer = setInterval(() => {
  //     if (timeLeft >= -1) {
  //       setSeconds(timeLeft);
  //       timeLeft--;
  //     } else {
  //       clearInterval(timer);
  //       setShowBio(true);
  //     }
  //   }, 1000);
  // },[]);

  // useEffect(() => {
  //   // let timeLeft = `00:0${seconds}.${milliseconds}`;

  //   let ms = 100;
  //   let s = seconds;

  //   for (let i = 2; i <= 0; i--) {
  //     const timerMilliseconds = setInterval(() => {
  //       if (ms === 0) {
  //         clearInterval(timerMilliseconds);
  //         s--;
  //         setSeconds(s);
  //       }

  //       setMilliseconds(ms);
  //       ms--;
  //     }, 10);
  //   }
  // }, []);

  const screenTap = () => {
    setShowBio(!showBio);
  };
  return (
    <div>
      <Head>
        <title>jays.space</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='hero-wrapper bg-cover bg-no-repeat bg-center-right h-screen border-none flex flex-col'>
        <div
          className={`hero-gradient bg-gradient-to-r from-black to-transparent flex flex-col pl-6 pr-6 pt-6 h-screen ${
            showBio ? "justify-end" : "justify-center"
          }`}>
          {/* Hero section */}

          <div className='hero-section flex flex-col'>
            <span className='text-xs mb-1'>Greetings traveller,</span>
            <MainHeader noMargin>
              I'm <CustomLink header url='/about' title='Jay.' />
            </MainHeader>
            <MainHeader>Welcome to My Space</MainHeader>
          </div>

          {/* Blurb section */}
          {showBio && (
            <div className='blurb-section mt-10 mb-24'>
              <Paragraph hero>
                I’m a Front-End Developer located in Johannesburg, South Africa.
                I have a passion for ideating, designing and developing digital
                experiences - bringing ideas to life.
              </Paragraph>

              <Paragraph hero>
                I want to{" "}
                <CustomLink url='/projects/' title='show you around' /> my
                space.
                <br />
                Let’s{" "}
                <CustomLink url='/contact' title=' start a conversation' />{" "}
                about some of the things we can do.
              </Paragraph>
            </div>
          )}

          {/* Countdown */}
          {/* {seconds === "00" ? (
            ""
          ) : (
            <span
              className='tap-to-launch flex justify-center fixed bottom-2 py-6 pr-10'
              onClick={screenTap}>
              <p className='text-xs font-header'>
                {seconds >= 0 ? `00:0${seconds}.${milliseconds}` : "Lift Off!"}
              </p>
            </span>
          )} */}

          {/* Switch button */}

          <span
            className='fixed bottom-6 right-6 w-14 h-14 bg-primary border-2 rounded-full border-current shadow-md'
            onClick={screenTap}></span>
        </div>
      </main>
    </div>
  );
}

// flex flex-col  justify-center p-6
