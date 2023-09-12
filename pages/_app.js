import "@/styles/globals.css";

import { useEffect } from "react";

import Navbar from "@/components/navbar";
import BackTop from "@/components/backTop";
import Footer from "@/components/footer";

import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

import { Toaster } from "react-hot-toast";

import Aos from "aos";
import "aos/dist/aos.css";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const routerName = router.route !== "/" ? router.route.charAt(1).toUpperCase() + router.route.slice(2) : "Home";
  const pageTitle = `Afix Vega - ${routerName}`;
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      easing: "ease-out-quad",
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Head>
        <title key="pagetitle">{pageTitle}</title>
        <meta name="description" content="Afix Vega - Welcome to My Portfolio" key="metadescription" />
        <link rel="icon" href="/afixicon.svg" />
      </Head>
      <main className={worksans.className}>
        <Navbar />
        <Toaster />
        <BackTop />
        <NextNProgress color="var(--c-secondary)" />
        <div className="overflow-x-hidden overflow-y-clip h-full w-full">
          <Component {...pageProps} />
        </div>
        {router.route !== "/contact" && <Footer />}
      </main>
    </>
  );
}
