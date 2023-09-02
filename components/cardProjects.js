import Image from "next/image";
import { Button } from "./button";

export default function CardProject({className}) {
  return (
    <>
      <div className={`${className} rounded-xl flex flex-col w-full md:w-[30%] px-4 py-4 bgCard`}>
        <div className="flex">
          <p className="text-base font-semibold">Project 818</p>
          <div className="icon"></div>
        </div>
        <p className="text-xs -mt-1">Role: Frontend Developer</p>
        <p className=" text-xs mt-2 font-medium text-c-body leading-tight">Event tahunan Departemen Teknik Elektro dan Teknologi Informasi UGM</p>
        <Image className="rounded-lg mt-3" src={'/180dc.png'} alt='Project 180dc UGM Website' width={'1000'} height={'1000'}/>
        <Button className="mt-3">See More</Button>
      </div>
    </>
  );
}
