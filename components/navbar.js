import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsMedium, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const router = useRouter();
  const isLinkActive = (href) => router.pathname === href;

  const [isNavListVisible, setNavListVisible] = useState(false);

  const toggleNavList = () => {
    setNavListVisible(!isNavListVisible);
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
      const navbar = document.querySelector("nav");
      const navbarMobile = document.querySelector("[data-navdisapear]");
      if (isScrollingDown() || window.pageYOffset < 50) {
        navbar.classList.add("top-6", "visible");
        navbar.classList.remove("-top-20", "invisible");
        navbarMobile.classList.add("top-4", "visible");
        navbarMobile.classList.remove("-top-20", "invisible");
      } else {
        navbar.classList.remove("top-6", "visible");
        navbar.classList.add("-top-20", "invisible");
        navbarMobile.classList.remove("top-4", "visible");
        navbarMobile.classList.add("-top-20", "invisible");
      }

      if (!isScrollingDown() && isNavListVisible) {
        setNavListVisible(!isNavListVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  const sosmedList = (
    <ul className="flex justify-end text-lg gap-4 [&>li]:text-c-body-fade [&>li:hover]:text-white md:[&>li:hover]:text-c-body-fade font-medium [&>li>a]:transition-all">
      <li>
        <Link href="https://www.linkedin.com/in/afix-vega/" target="_blank">
          <BsLinkedin />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/afixv" target="_blank">
          <BsGithub />
        </Link>
      </li>
      <li>
        <Link href="https://medium.com/@afixv00" target="_blank">
          <BsMedium />
        </Link>
      </li>
    </ul>
  );

  const navList = (
    <ul className="flex text-c-body-fade justify flex-col md:flex-row md:justify-center gap-4 md:gap-0 md:[&>li>a]:px-6 [&>li:hover]:text-white font-medium [&>li>a]:transition-all">
      <li>
        <Link href="/" className={isLinkActive("/") ? "text-white" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/projects" className={isLinkActive("/projects") ? "text-white" : ""}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="/blog" className={isLinkActive("/blog") ? "text-white" : ""}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className={isLinkActive("/contact") ? "text-white" : ""}>
          Contact
        </Link>
      </li>
    </ul>
  );

  const logo = (
    <Link href="/" className="scale-75 md:scale-100 items-center flex">
      <Image className="hover:opacity-40 transition-all" src="logo.svg" alt="Logo" width="32" height="32" />
    </Link>
  );

  return (
    <>
      <div className="hidden md:flex justify-between mx-auto container max-w-[1120px] mt-8 z-10 px-10">
        {logo}
        <div className="  flex items-center">{sosmedList}</div>
      </div>
      <nav className="hidden md:block -mt-10 mx-auto text-c-body-fade sticky top-6 bg-c-black-grey py-2.5 px-6 rounded-full drop-shadow-lg w-[420px] z-10 transition-all duration-300">{navList}</nav>
      <nav data-navdisapear className="block md:hidden z-20 transition-all duration-[650ms] sticky top-4 ">
        <div className="flex items-center justify-between mt-4 mx-6 text-c-body-fade  bg-c-black-grey py-2 pl-6 pr-4 rounded-full drop-shadow-md">
          {logo}
          <button onClick={toggleNavList} className={`text-white text-2xl bg-c-secondary p-1.5 rounded-full hover:opacity-80 ${isNavListVisible ? "-rotate-180" : ""} transition-transform transform duration-300 ease-in-out `}>
            {isNavListVisible ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>
        <div
          data-menuMobile
          className={`${isNavListVisible ? "opacity-100 translate-y-0" : "-translate-y-12 -z-10 opacity-0"}  absolute text-sm w-[150px] mr-9 mt-4 rounded-xl right-0 bg-c-black-grey shadow-lg px-8 py-8 transform transition-all duration-300`}
        >
          {navList}
          <div className="text-c-body-fade hover:text-white mt-5 flex justify-start items-center">{sosmedList}</div>
        </div>
      </nav>
    </>
  );
}
