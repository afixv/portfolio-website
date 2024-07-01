import Image from "next/image";
import { Tooltip } from "react-tooltip";

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

  const iconName = {
    Figma: "Figma",
    Photoshop: "Photoshop",
    AI: "Adobe Illustrator",
    Js: "JavaScript",
    Cpp: "C++",
    ReactBrand: "React / React Native",
    NextJs: "NextJs",
    Tailwind: "Tailwind",
    Antd: "Ant Design",
    Pg: "PostgreSQL",
    Laravel: "Laravel",
    Python: "Python",
  };

  const selectedIcon = iconComponents[icon || "/icons/figma.svg"];
  const selectedColor = [color || "text-white"];
  return (
    <>
      <div
        data-tooltip-content={iconName[icon]}
        data-tip={icon}
        data-tooltip-id={icon}
        className={` ${selectedColor} bgCard backdrop-blur-sm rounded-xl py-3 px-3 sm:py-4 sm:px-4 sm:text-5xl hover:-translate-y-1.5  hover:opacity-80 transition-all`}>
        <div className="pointer-events-none">
          <Image src={selectedIcon} alt="icon" width={48} height={48} />
        </div>
      </div>
      <Tooltip id={icon} style={{ fontSize: 12, borderRadius: 8 }} />
    </>
  );
}
