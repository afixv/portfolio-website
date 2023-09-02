import "@/styles/globals.css";
import BgStyle from "@/components/bgstyle";
import Navbar from "@/components/navbar";
import BackTop from "@/components/backTop";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const routerName = router.route !== "/" ? router.route.charAt(1).toUpperCase() + router.route.slice(2) : "Home";
  const pageTitle = `Afix Vega - ${routerName}`;
  return (
    <>
      <Head>
        <title key="pagetitle">{pageTitle}</title>
        <meta name="description" content="Afix Vega - Welcome to My Portfolio" key="metadescription" />
        <link rel="icon" href="/afixicon.svg" />
      </Head>
      <main className={worksans.className}>
        <BgStyle />
        <Navbar />
        <BackTop />
        <Component {...pageProps} />
      </main>
    </>
  );
}
