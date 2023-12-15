import Image from "next/image";
import Link from "next/link";

export default function CardProject({ className, image, title, role, desc, link }) {
  return (
    <>
      <div className={`${className} backdrop-blur-sm flex flex-col rounded-xl w-full  md:w-[30%] bgCard hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="flex ">
          <Image className="rounded-t-xl  w-full h-[160px] object-cover" src={image} width="500" height={"500"} alt={title} />
        </div>
        <Link href={link} target="_blank" className=" flex flex-col px-4 pt-2 pb-4">
          <div className="flex">
            <p className="text-base font-semibold">{title}</p>
            <div className="icon"></div>
          </div>
          <p className="text-xs -mt-1">Role: {role}</p>
          <p className=" text-xs mt-2 font-medium text-c-body leading-tight">{desc}</p>
        </Link>
      </div>
    </>
  );
}
