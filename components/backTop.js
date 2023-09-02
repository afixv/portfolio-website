import Image from "next/image";
import { useEffect } from "react";

export default function BackTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let scrollPosition = 0;
    const isScrollingDown = () => {
      let scrollingDown = false;
      let newScrollPosition = window.pageYOffset;
      if (newScrollPosition > scrollPosition) {
        scrollingDown = true;
      }
      scrollPosition = newScrollPosition;
      return scrollingDown;
    };
    const handleScroll = () => {
      const scrollToTopButton = document.querySelector("[data-backToTopButton]");
      if (isScrollingDown() || window.pageYOffset === 0) {
        scrollToTopButton.classList.add("-bottom-16", "invisible");
        scrollToTopButton.classList.remove("bottom-8", "visible");
      } else {
        scrollToTopButton.classList.remove("-bottom-16", "invisible");
        scrollToTopButton.classList.add("bottom-8", "visible");
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <button data-backToTopButton onClick={scrollToTop} className="hover:opacity-80 transition-all w-12 h-12 flex items-center bg-c-secondary-fade z-10 fixed bottom-8 right-8 rounded-xl">
        <Image className="z-20 mx-auto pointer-events-none" src="cursortop.svg" alt="Cursor Top" width="16" height="20" />
      </button>
    </>
  );
}
