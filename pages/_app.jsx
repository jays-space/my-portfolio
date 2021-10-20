import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

//COMPONENTS
import NavigationBar from "../components/main-nav-bar.component";
import Footer from "../components/footer.component";
import TransitionLayout from "../components/screen-transitions.component";

//GLOBAL STYLES
import "../styles.css";

function MyApp({ Component, pageProps }) {
  const [navHidden, setNavHidden] = useState(true);
  const route = useRouter();
  const { pathname } = route;

  const showNav = () => {
    setNavHidden(!navHidden);
  };

  return (
    <div className="font-body flex flex-col h-screen">
      <NavigationBar />
      <div className={`flex`}>
        <main
          className={`transition-transform duration-300 ease-in-out delay-300 ${
            navHidden ? "translate-x-0" : "-translate-x-2/3"
          }`}
        >
          {/*
              //* hero section darkens when nav is open
              //! Cannot access elements on screen (other than nav btns) because the z-index is higher
            */}
          <div
            className={`darken-on-nav-active fixed left-0 top-0 bg-black w-screen h-full z-40 transition-opacity duration-300 delay-300 ${
              navHidden ? "opacity-0" : "opacity-80"
            } ${pathname === "/" ? "hidden" : "visible"}`}
          />

          {/* <TransitionLayout> */}
          <Component {...pageProps} />
          {/* </TransitionLayout> */}
        </main>

        {/* Navigation section */}
        <nav
          className={`flex items-center fixed h-screen w-2/3 right-0 bg-primary p-6 transition-transform duration-300 ease-in-out delay-300 z-50 ${
            navHidden ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <ul className="flex flex-col w-full">
            <Link href={"/about"}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-600 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0 transition-all duration-100"
                }`}
                onClick={() => setNavHidden(true)}
              >
                About.
              </li>
            </Link>

            <Link href={"/projects/"} onClick={showNav}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-700 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0  transition-all duration-100"
                }`}
                onClick={() => setNavHidden(true)}
              >
                Projects.
              </li>
            </Link>

            <Link href={"/contact"} onClick={showNav}>
              <li
                className={`font-header text-xl font-bold mb-2 transition-transform delay-800 ease-out ${
                  navHidden
                    ? "opacity-0 translate-x-24 transition-all duration-10 delay-300"
                    : "opacity-100 translate-x-0  transition-all duration-100"
                }`}
                onClick={() => setNavHidden(true)}
              >
                Contact.
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Nav buttons */}
      {/* 
        //* if not on the index page, show nav button
       */}
      {pathname !== "/" && (
        <nav className="bubble fixed bottom-0 right-6 flex justify-end mb-6 items-center z-50">
          <div className="fixed bottom-11 left-6">
            {/* <Link href="/">
            <a>{`< -- Back`}</a>
          </Link> */}
          </div>

          {/* 
            //* Bubble sits behind the button - controls the effect that occures when the button is pressed 
          */}
          <div
            className={`bg-current fixed bottom-10 right-10 w-8 h-8 rounded-full transition-opacity duration-500 ease-in-out animate-ping ${
              navHidden ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`bubble fixed bottom-6 right-6 w-16 h-16 rounded-full transition-all duration-500 ease-in-out ${
              navHidden ? "bg-primary bubble-primary-active" : "bg-current"
            }`}
          />
          <div
            className={`nav-icon fixed bottom-7 right-7 w-14 h-14 rounded-full bg-primary transition-colors duration-300 ease-in-out z-10 ${
              !navHidden && "open"
            }`}
            onClick={showNav}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      )}
      <Footer />
    </div>
  );
}

export default MyApp;

//https://nextjs.org/docs/basic-features/layouts
