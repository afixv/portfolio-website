import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsMedium, BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const isLinkActive = (href) => router.pathname === href;

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
      const navbar = document.querySelector("[data-navbarDisapear]");
      if (isScrollingDown() || window.pageYOffset < 50) {
        navbar.classList.add("top-6", "visible");
        navbar.classList.remove("-top-20", "invisible");
      } else {
        navbar.classList.remove("top-6", "visible");
        navbar.classList.add("-top-20", "invisible");
      }
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="flex justify-between mx-auto container max-w-[1120px] mt-8 z-10 px-10">
        <Link href="/" className="items-center flex">
          <Image className="hover:opacity-40 transition-all" src="logo.svg" alt="Logo" width="32" height="32" />
        </Link>
        <div className="flex items-center">
          <ul className="flex justify-end text-lg gap-4 [&>li:hover]:text-c-body-fade font-medium [&>li>a]:transition-all">
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
        </div>
      </div>
      <nav data-navbarDisapear className="-mt-10 mx-auto text-c-body-fade sticky top-6 bg-c-black-grey py-2.5 px-6 rounded-full drop-shadow-lg w-[420px] z-10 transition-all duration-500">
        <ul className="flex justify-center [&>li>a]:px-6 [&>li:hover]:text-white font-medium [&>li>a]:transition-all">
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
      </nav>
    </>
  );
}
