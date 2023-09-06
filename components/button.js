import Image from "next/image";

export const Button = ({ children, size, onClick, className }) => {
  const buttonSize = {
    md: "text-xs px-4 py-2 max-w-[140px]",
    lg: "text-sm px-5 py-3 max-w-[170px]",
  };
  const sizeClassName = buttonSize[size || "md"];
  const imageWidth = size === "lg" ? 30 : 25;
  const imageHeight = size === "lg" ? 30 : 25;

  return (
    <button type="submit" className={` ${className} ${sizeClassName} group/button hover:opacity-80 flex items-center gap-3 rounded-full bg-c-button text-c-black-grey  transition-all font-semibold `} onClick={onClick}>
      {children}
      <div className="h-full w-full group-hover/button:translate-x-1 transition-all">
        <Image className=" flex text-c-black-grey" src="arrowbutton.svg" alt="arrow" width={imageWidth} height={imageHeight} />
      </div>
    </button>
  );
};
