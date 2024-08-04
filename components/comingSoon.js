import Link from "next/link";
import { useEffect } from "react";
import { BsMedium, BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "./button";
import Image from "next/image";
import BgStyle from "@/components/bgstyle";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ComingSoon() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="overflow-y-hidden relative h-screen">
        <BgStyle />
        <Image
          data-aos='fade-up'
          className="-z-10 absolute mx-auto -bottom-16 left-0 right-0"
          alt="Icon Outlined"
          src={"/afixiconoutlined.png"}
          width={380}
          height={380}></Image>
        <div className="flex mx-5 justify-center items-center min-h-screen">
          <div className="flex flex-col items-start sm:items-center">
            <div className="mb-2 ml-1 sm:ml-0 md:mb-5" data-aos="fade-up">
              <ul className="flex text-lg gap-4 [&>li]:text-white [&>li:hover]:text-c-body-fade font-xl [&>li>a]:transition-all">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/afix-vega/"
                    target="_blank">
                    <BsLinkedin />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/afixv" target="_blank">
                    <BsGithub />
                  </Link>
                </li>
                <li>
                  <Link href="https://medium.com/@afixv00" target="_blank">
                    <BsMedium />
                  </Link>
                </li>
              </ul>
            </div>

            <h1
              className="leading-none font-bold text-6xl md:text-8xl text-left sm:text-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.38) 0%, #FFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              data-aos="fade-up"
              data-aos-delay="200">
              COMING SOON
            </h1>
            <p
              className="sm:text-center text-left text-c-body text-xs sm:text-base md:text-body mt-2"
              data-aos="fade-up"
              data-aos-delay="300">
              This page is still under development. Please come back later.
            </p>
            <Link href="/" data-aos="fade-up" data-aos-delay="400">
              <Button className="mt-5 max-w-[170px]">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
