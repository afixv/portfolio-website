import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title key="pagetitle">Afix Vega</title>
        <meta name="description" content="Afix Vega - Welcome to My Portfolio" key="metadescription" />
        <link rel="icon" href="/afixicon.svg" />
      </Head>
      <main>
        <div className="flex justify-center items-center flex-col">
          <Image className="rounded-full" alt="Afix's Profile Picture" src="/mypicture.png" width="150" height="150" />
          <h2 className="font-semibold text-4xl">Hi, I am Afix 👋</h2>
          <p className="text-c-body ">Information Engineering Undergraduate Student</p>
          <h1 className="font-semibold text-[40px] text-center heigh leading-tight mt-6">
            Explore the future with <br />
            captivating UI/UX design and <br />
            front-end abilities.
          </h1>
        </div>
      </main>
    </>
  );
}
