import { useEffect, useState } from "react";

export default function BgStyle({ pageID }) {
  const [mainContentHeight, setMainContentHeight] = useState("100vh");

  useEffect(() => {
    const mainContent = document.getElementById(pageID);
    const height = mainContent
      ? mainContent.scrollHeight + 300 + "px"
      : "100vh";
    setMainContentHeight(height);
  }, [pageID]);

  return (
    <div className="absolute inset-0 -z-50">
      <div className="mx-auto max-w-[850px]">
        <div className="flex justify-between flex-row">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              style={{ height: mainContentHeight }}
              key={index}
              className="w-[.5px] md:w-[1px] bg-c-black-grey"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
