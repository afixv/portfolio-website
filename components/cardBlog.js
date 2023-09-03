import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export default function CardBlog({ className }) {
  return (
    <>
      <div className={`${className} backdrop-blur-sm rounded-xl w-full min-h-[16rem] md:w-[30%] bgCard hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="relative h-3/5">
          <Image className="rounded-t-xl" src={"/180dc.png"} alt="Project 180dc UGM Website" fill style={{ objectFit: "cover" }} />
        </div>
        <Link href="/" className="relative flex flex-col px-4 pt-2 pb-4">
          <div className="flex">
            <p className="text-base font-semibold">Project 818</p>
            <div className="icon"></div>
          </div>
          <p className="text-xs -mt-1">Role: Frontend Developer</p>
          <p className=" text-xs mt-2 font-medium text-c-body leading-tight">Event tahunan Departemen Teknik Elektro dan Teknologi Informasi UGM</p>
        </Link>
      </div>
    </>
  );
}
