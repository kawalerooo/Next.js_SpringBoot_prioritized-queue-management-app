import "../styles/globals.css";
import MainDrawer from "../components/MainDrawer";

function MyApp({ Component, pageProps }) {
  return (
    <MainDrawer>
      <Component {...pageProps} />
    </MainDrawer>
  );
}

export default MyApp;
