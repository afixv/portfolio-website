import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <main>
          <Hero />
          <About />
          <Projects />
        </main>
      </div>
    </>
  );
}

const Hero = () => {
  return (
    <>
      <div className="-mt-8 flex min-h-screen justify-center items-center flex-col">
        <Image className="rounded-full" alt="Afix's Profile Picture" src="/mypicture.png" width="150" height="150" />
        <h2 className="font-semibold mt-3 text-4xl">Hi, I am Afix 👋</h2>
        <p>Information Engineering Undergraduate Student</p>
        <h1 className="font-semibold mx-10 text-[28px] md:text-[40px] md:w-[600px] text-center heigh leading-tight mt-6">Explore the future with captivating UI/UX design and front-end abilities.</h1>
        <Link href="#about">
          <Image className="mt-20 animate-bounce pointer-events-none" alt="arrow" src="/arrowdown.svg" width="18" height="18" />
        </Link>
        <Image className="absolute ml-[200px] mt-[300px] pointer-events-none" src="/scratch.svg" alt="scratch style" width="200" height="200" />
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div id="about" className="flex justify-center pt-20">
        <div className="max-w-[800px] self-center flex flex-col mx-10 text-center">
          <h2 className="font-semibold">
            Hello, it’s me! 😉
          </h2>
          <p className="text-justify md:text-center">
            Uncover the astonishing IT aptitudes of a university student who is revolutionizing the UI/UX design and front-end development industries. This rising technology virtuoso specializes in crafting stylish, contemporary, and
            immersive websites, converting common concepts into exceptional online encounters.
          </p>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="max-w-[900px] mx-auto px-10 mt-20">
        <div className="flex md:justify-end">
          <div className="flex flex-col md:w-2/3">
            <h2 className="text-center md:text-right">🚀 Highlight Project </h2>
            <p className=" text-center md:text-right">These are some of the projects I have created. These projects have not only helped me build my portfolio, but also enhanced the skills I have developed.</p>
          </div>
        </div>

        <div className="flex flex-col mx-10"></div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <div>
        <h2>Specialized Skills 👨‍💻 </h2>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <>
      <div>
        <h2>✏️Latest Blog </h2>
      </div>
    </>
  );
};
