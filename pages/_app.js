import "@/styles/globals.css";
import BgStyle from "@/components/bgstyle";
import Navbar from "@/components/navbar";
import BackTop from "@/components/backTop";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={worksans.className}>
      <BgStyle />
      <Navbar />
      <BackTop />
      <Component {...pageProps} />
    </main>
  );
}
