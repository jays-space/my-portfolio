import "tailwindcss/tailwind.css";

//COMPONENTS
import NavigationBar from "../components/main-nav-bar.component";
import Footer from "../components/footer.component";
import TransitionLayout from "../components/screen-transitions.component";

//GLOBAL STYLES
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body flex flex-col h-screen">
      <NavigationBar />
      <TransitionLayout>
        <Component {...pageProps} />
      </TransitionLayout>
      <Footer />
    </div>
  );
}

export default MyApp;

//https://nextjs.org/docs/basic-features/layouts
