import BgStyle from "@/components/bgstyle";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/button";

export default function Contactme() {
  return (
    <>
      <BgStyle />
      <div className="flex items-center mt-0 md:mt-8 gap-10 justify-center py-10 px-6 md:px-10 flex-col md:flex-row max-h-screen max-w-[1080px] mx-auto">
        <div className="flex flex-start flex-col ">
          <h3 className="text-[18px] items-center md:text-2xl">Dont Be Shy - Say Hi!</h3>
          <h2 className="text-[28px] leading-[1.1] mt-1 md:text-4xl">Get in Touch with Me!</h2>
          <p className="text-c-body text-xs md:text-base  font-normal mt-2">lets rocket towards success and turn your ideas into something extraordinary! 🚀 🌟</p>
          <ul className="flex flex-1/2 text-xl md:text-2xl mt-4 gap-4 [&>li]:text-white [&>li:hover]:text-c-body-fade [&>li>a]:transition-all">
            <li>
              <Link href="https://www.facebook.com/Afix.VpID/" target="_blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/afixv" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/AfixVega" target="_blank">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/afixve" target="_blank">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full md:w-2/3 text-sm md:text-base ">
          <form action="/action_page.php" className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="name" class="block mb-1 ml-2 text-white">
                Full Name
              </label>
              <input
                required
                className="text-white text-sm md:text-base  w-full backdrop-blur-sm transition-all placeholder-[#6E6E6E]
              outline-none focus:ring-1 focus:ring-c-secondary
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
              rounded-full px-4 py-3 bgForm"
                placeholder="Enter your full name..."
                type="text"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email" class="block mb-1 ml-2 text-white">
                Email
              </label>
              <input
                required
                className="text-white text-sm md:text-base  w-full backdrop-blur-sm transition-all placeholder-[#6E6E6E]
              outline-none focus:ring-1 focus:ring-c-secondary
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
              rounded-full px-4 py-3 bgForm"
                placeholder="Enter your email..."
                type="email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message" class="block mb-1 ml-2 text-white">
                Message
              </label>
              <textarea
                required
                placeholder="Enter your message..."
                id="message"
                className="block text-white w-full backdrop-blur-sm transition-all placeholder-[#6E6E6E]
              outline-none focus:ring-1 focus:ring-c-secondary
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 focus:invalid:ring-red-500
              rounded-2xl min-h-[200px] -z-20 px-4 py-3 bgForm"
              />
            </div>
            <div className="mt-2">
              <Button size="lg">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
