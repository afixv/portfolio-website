import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={worksans.className}>
      <Component {...pageProps} />
    </main>
  );
}
