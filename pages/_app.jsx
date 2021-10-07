import "tailwindcss/tailwind.css";

//COMPONENTS
import NavigationBar from "../components/main-nav-bar.component";
import Footer from "../components/footer.component";

//GLOBAL STYLES
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-body flex flex-col h-screen'>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

//https://nextjs.org/docs/basic-features/layouts
