import { Button } from "./button";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mt-20 md:max-w-[1080px] mx-auto pt-32 px-10 pb-12 relative bottom-0 w-full bgFooter">
        <div className="flex md:justify-start">
          <div className="flex flex-col md:w-4/5 md:ml-7">
            <h3 className="text-[24px] md:text-4xl">Don’t Be Shy - Say Hi!</h3>
            <h2 className="text-4xl leading-[1.1] mt-1 md:text-[48px]">Do you have any project ideas? Feel free to get in touch! 😉</h2>
            <p className="text-c-body text-xs md:text-base  font-normal mt-2">These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.</p>
            <Link href={"/contact"} className="mt-6">
              <Button size={"lg"}>Contact Me</Button>
            </Link>
            <span className="text-c-body text-sm md:text-base font-normal mt-16">© 2023 Afix Vega Praditya</span>
          </div>
        </div>
      </div>
    </>
  );
}
