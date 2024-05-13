import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import CardProject from "@/components/cardProjects";
import CardIcon from "@/components/cardIcon";
import CardBlog from "@/components/cardBlog";
import BgStyle from "@/components/bgstyle";

export default function Home() {
  return (
    <>
      <div id="home" className="min-h-screen">
        <BgStyle pageID={"home"} />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

const Hero = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="-mt-8 mx-5 flex min-h-screen justify-center items-center flex-col">
        <Image
          className="rounded-full"
          alt="Afix's Profile Picture"
          src="/mypicture.png"
          width="150"
          height="150"
        />
        <div className="flex items-center mx-auto">
          <h2 className=" text-center font-semibold mt-3 text-4xl">
            Hi, I am Afix
          </h2>
          <span className="text-center text-4xl animate-waving flex justify-center">
            👋
          </span>
        </div>

        <p className="text-center text-body">
          Information Engineering Undergraduate Student
        </p>
        <h1 className="font-semibold mx-10 text-[28px] md:text-[40px] max-w-[400px] md:max-w-[600px] text-center heigh leading-tight mt-6">
          Explore the future with captivating UI/UX design and front-end
          abilities.
        </h1>
        <Link href="#about">
          <Image
            className="mt-20 animate-bounce pointer-events-none"
            alt="arrow"
            src="/arrowdown.svg"
            width="18"
            height="18"
          />
        </Link>
        <Image
          className="absolute w-40 md:w-[200px] ml-[10px] xs:ml-[100px] md:ml-[200px] mt-[300px] xs:mt-[230px] md:mt-[300px] pointer-events-none"
          src="/scratch.svg"
          alt="scratch style"
          width="200"
          height="200"
        />
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        id="about"
        className="flex justify-center pt-20">
        <div className="max-w-[800px] self-center flex flex-col mx-10 text-center">
          <h2 className="font-semibold">Hello, it’s me! 😉</h2>
          <p className="text-body text-justify md:text-center">
            Uncover the astonishing IT aptitudes of a university student who is
            revolutionizing the UI/UX design and front-end development
            industries. This rising technology virtuoso specializes in crafting
            stylish, contemporary, and immersive websites, converting common
            concepts into exceptional online encounters.
          </p>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="md:max-w-[1080px] mx-auto px-10 mt-20">
        <div className="flex md:justify-end">
          <div data-aos="fade-left" className="flex flex-col md:w-2/3 md:mr-7">
            <h2 className="text-center md:text-right">🚀 Highlight Project </h2>
            <p className=" text-desc text-center md:text-right">
              These are some of the projects I have created. These projects have
              not only helped me build my portfolio, but also enhanced the
              skills I have developed.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="max-w-[400px] md:max-w-[1080px] mx-auto">
          <div className=" flex justify-center mt-10 flex-wrap gap-4">
            <CardProject
              image="/rentalin.png"
              title="Rentalin"
              role="Full Stack Developer"
              desc="Website untuk tugas mata kuliah Pemrograman Web yang dibuat menggunakan ExpressJS dan NextJS"
              link="https://paw-kelompok-11-client.vercel.app/"
            />
            <CardProject
              image="/damar.png"
              title="DAMAR"
              role="Fullstack Developer & UI/UX Designer"
              desc="Aplikasi pelaporan jalan rusak, terdapat mobile app menggunakan React Native dan website sebagai dashboard."
              link="https://github.com/Damar-C05/damar-mobile-app"
            />
            <CardProject
              image="/old-portfolio.png"
              title="My Old Portfolio Website"
              role="Frontend Developer"
              desc="Portfolio website saya yang lama menggunakan HTML, CSS, dan Javascript Vanilla."
              link="https://www.180dcugm.org/"
            />
          </div>
        </div>

        <div data-aos="fade-up" className="mt-6 flex justify-center">
          <Link href={"/projects"}>
            <Button>View All</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  const iconData = [
    { id: 1, icon: "Figma", color: "text-white" },
    { id: 2, icon: "Photoshop", color: "text-white" },
    { id: 3, icon: "AI", color: "text-white" },
    { id: 4, icon: "Js", color: "text-white" },
    { id: 5, icon: "Cpp", color: "text-white" },
    { id: 6, icon: "ReactBrand", color: "text-white" },
    { id: 7, icon: "NextJs", color: "text-white" },
    { id: 8, icon: "Tailwind", color: "text-white" },
    { id: 9, icon: "Antd", color: "text-white" },
    { id: 10, icon: "Pg", color: "text-white" },
  ];
  return (
    <>
      <div
        data-aos="fade-right"
        className="-z-10  bgSection md:rounded-r-[50px] h-[32rem] md:h-[30rem] absolute mt-20 w-full md:w-[80%]"></div>
      <div
        data-aos="fade-right"
        className="flex-col px-10 max-w-[1080px] mx-auto mt-32">
        <div className="flex flex-col md:ml-7">
          <h2>Specialized Skills 👨‍💻 </h2>
          <p className="text-desc sm:w-2/3">
            These are some of the projects I have created. These projects have
            not only helped me build my portfolio, but also enhanced the skills
            I have developed.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-10 max-w-[400px] md:max-w-[700px] mx-auto">
          <div className=" flex justify-center mt-6 flex-wrap gap-4 md:gap-12">
            {iconData.map((data) => (
              <CardIcon key={data.id} color={data.color} icon={data.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <>
      <div className="md:max-w-[1080px] mx-auto px-10 mt-36">
        <div data-aos="fade-down" className="flex md:justify-center">
          <div className="flex flex-col md:w-2/3 md:mr-7">
            <h2 className="text-center">✏️ Latest Blog </h2>
            <p className=" text-desc text-center">
              These are some of the projects I have created. These projects have
              not only helped me build my portfolio, but also enhanced the
              skills I have developed.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="max-w-[400px] md:max-w-[1080px] mx-auto">
          <div className=" flex justify-center mt-10 flex-wrap gap-4">
            <CardBlog />
            <CardBlog />
            <CardBlog />
          </div>
        </div>

        <div data-aos="fade-up" className="mt-6 flex justify-center">
          <Link href={"/blog"}>
            <Button>View All</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
