import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="mt-20 md:max-w-[1080px] mx-auto pt-32 px-10 pb-16 relative bottom-0 w-full bgFooter">
        <Image className="absolute right-2 bottom-16" alt="Icon Outlined" src={"/afixiconoutlined.png"} width={280} height={280}></Image>
        <div className="flex md:justify-start">
          <div className="flex flex-col  md:ml-7">
            <h3 className="text-[24px] md:text-4xl">Dont Be Shy - Say Hi!</h3>
            <h2 className="text-4xl leading-[1.1] mt-1 md:text-[48px]">Do you have any project ideas? Feel free to get in touch! 😉</h2>
            <p className="text-c-body text-xs md:text-base  font-normal mt-2">
              Prepare for liftoff, because Im bursting with enthusiasm to infuse your projects with a touch of enchantment! Together, lets rocket towards success and turn your ideas into something extraordinary! 🚀 🌟
            </p>
            <Link href={"/contact"} className="mt-6">
              <Button size={"lg"}>Contact Me</Button>
            </Link>
            <span className="text-c-body text-sm md:text-base font-normal mt-16">© 2023 Afix Vega Praditya</span>
          </div>
        </div>
      </footer>
    </>
  );
}
