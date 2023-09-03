import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import {AiOutlineComment} from "react-icons/ai"

export default function CardBlog({ className }) {
  return (
    <>
      <div className={`${className} backdrop-blur-sm rounded-xl w-full min-h-[16rem] md:w-[30%] bgCard hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="relative h-3/5">
          <Image className="rounded-t-xl" src={"/blog.png"} alt="Project 180dc UGM Website" fill style={{ objectFit: "cover" }} />
        </div>
        <Link href="/" className="relative flex flex-col px-4 pt-4 pb-4">
          <div className="flex">
            <p className="text-base leading-tight font-semibold">Understanding Next.js Data Fetching (CSR, SSR, SSG, ISR)</p>
            <div className="icon"></div>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <p className="text-xs">September 3, 2023</p>
            <div className="text-xs gap-1 items-center flex flex-row">
              {" "}
              <FaRegEye /> 133{" "}
            </div>
            <div className="text-xs gap-1 items-center flex flex-row">
              {" "}
              <AiOutlineComment /> 11{" "}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
