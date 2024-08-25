import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const skillIcons = {
  Figma: "/icons-brand/figma.svg",
  Photoshop: "/icons-brand/ps.svg",
  AI: "/icons-brand/ai.svg",
  JavaScript: "/icons-brand/js.svg",
  Cpp: "/icons-brand/cpp.svg",
  ReactBrand: "/icons-brand/react.svg",
  NextJs: "/icons-brand/next.svg",
  Tailwind: "/icons-brand/tw.svg",
  Antd: "/icons-brand/antd.svg",
  PgSQL: "/icons-brand/pgsql.svg",
  React: "/icons-brand/react.svg",
  ReactNative: "/icons-brand/react.svg",
  Laravel: "/icons-brand/laravel.svg",
  MongoDB: "/icons-brand/mongodb.svg",
  Python: "/icons-brand/python.svg",
  HTML: "/icons-brand/html.svg",
  CSS: "/icons-brand/css.svg",
};

export default function CardProject({
  className,
  image,
  title,
  role,
  desc,
  link,
  skills,
  alt = title,
  dataAos,
  dataAosDelay,
}) {
  return (
    <>
      <div
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
        className={`${className} backdrop-blur-sm flex flex-col group rounded-xl w-full bgCard hover:opacity-80 transition-all`}>
        <Link href={link} target="_blank">
          <div className="overflow-hidden rounded-t-xl">
            <Image
              className="w-full h-[160px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={image}
              width="500"
              height="500"
              alt={alt}
            />
          </div>
        </Link>
        <Link
          href={link}
          target="_blank"
          className=" flex justify-between flex-col px-4 pt-2 pb-4">
          <div>
            <div className="flex">
              <p className="text-base font-semibold">{title}</p>
              <div className="icon"></div>
            </div>
            <p className="text-xs -mt-1 italic">{role}</p>
            <p className=" text-xs mt-2 font-medium text-c-body leading-tight">
              {desc}
            </p>
          </div>
          <div className="mt-2 flex space-x-2 relative">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-tooltip-id={skill}
                data-tooltip-content={skill}>
                <Image
                  src={skillIcons[skill]}
                  alt={skills}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <ReactTooltip
                  id={skill}
                  style={{ fontSize: 12, borderRadius: 8 }}
                />
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}
