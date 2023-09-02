import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsMedium, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href) => router.pathname === href;
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
      <nav className="-mt-10 mx-auto text-c-body-fade  sticky top-6 bg-c-black-grey py-2.5 px-6 rounded-full drop-shadow-lg w-[420px] z-10">
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
