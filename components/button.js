import Image from "next/image";

export const Button = ({ children, size, onClick, className }) => {
  const buttonSize = {
    md: "text-xs px-4 py-2",
    lg: "text-sm px-5 py-3",
  };
  const sizeClassName = buttonSize[size || "md"];
  const imageWidth = size === "lg" ? 30 : 25;
  const imageHeight = size === "lg" ? 30 : 25;

  return (
    <button type="submit" className={` ${className} ${sizeClassName} hover:opacity-80 flex items-center gap-4 rounded-full bg-c-button text-c-black-grey  transition-all font-semibold `} onClick={onClick}>
      {children}
      <Image className="flex text-c-black-grey" src="arrowbutton.svg" alt="arrow" width={imageWidth} height={imageHeight} />
    </button>
  );
};
