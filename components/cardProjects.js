import Image from "next/image";
import Link from "next/link";

export default function CardProject({ className }) {
  return (
    <>
      <div className={`${className} backdrop-blur-sm flex flex-col rounded-xl w-full  md:w-[30%] bgCard hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="flex ">
          <Image className="rounded-t-xl  w-full h-[160px] object-cover" src={"/180dc.png"} width="500" height={"500"} alt="Project 180dc UGM Website" />
        </div>
        <Link href="/" className=" flex flex-col px-4 pt-2 pb-4">
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
