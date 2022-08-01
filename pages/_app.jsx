import React, { useState } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

//COMPONENTS
import NavigationBar from "../components/main-nav-bar.component";
import Footer from "../components/footer.component";

//GLOBAL STYLES
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main font-body flex flex-col h-full w-screen">
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

//https://nextjs.org/docs/basic-features/layouts
