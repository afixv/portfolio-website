import { CgFigma } from "react-icons/cg";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoReact,
} from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import Image from "next/image";

export default function CardIcon({ color, icon }) {
  const iconComponents = {
    Figma: "/icons-brand/figma.svg",
    Photoshop: "/icons-brand/ps.svg",
    AI: "/icons-brand/ai.svg",
    Js: "/icons-brand/js.svg",
    Cpp: "/icons-brand/cpp.svg",
    ReactBrand: "/icons-brand/react.svg",
    NextJs: "/icons-brand/next.svg",
    Tailwind: "/icons-brand/tw.svg",
    Antd: "/icons-brand/antd.svg",
    Pg: "/icons-brand/pgsql.svg",
    Laravel: "/icons-brand/laravel.svg",
    Python: "/icons-brand/python.svg",
  };

  const selectedIcon = iconComponents[icon || "/icons/figma.svg"];
  const selectedColor = [color || "text-white"];
  return (
    <>
      <div
        className={` ${selectedColor} bgCard backdrop-blur-sm rounded-xl py-3 px-3 sm:py-4 sm:px-4 sm:text-5xl hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="pointer-events-none">
          <Image src={selectedIcon} alt="icon" width={48} height={48} />
        </div>
      </div>
    </>
  );
}
