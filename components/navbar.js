import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href) => router.pathname === href;
  return (
    <div className="mx-auto sticky top-5 container max-w-[1080px] mt-5 z-10 ">
      <div className="flex justify-between">
        <Image src="logo.svg" alt="Logo" width="32" height="32" />
        <nav className="text-c-body-fade  bg-c-black-grey py-2.5 px-4 rounded-full drop-shadow-lg">
          <ul className="flex  justify-center [&>li>a]:px-6 [&>li:hover]:text-white font-medium [&>li>a]:transition-all">
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
        <div>dg</div>
      </div>
    </div>
  );
}
