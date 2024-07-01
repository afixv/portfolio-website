import BgStyle from "@/components/bgstyle";
import CardProject from "@/components/cardProjects";

export default function Projects() {
  const portfolioDatas = [
    {
      image: "/portfolio/Rentalin.jpg",
      title: "Rentalin",
      role: "Full Stack Developer",
      desc: "Website untuk tugas mata kuliah Pemrograman Web yang dibuat menggunakan ExpressJS dan NextJS",
      link: "https://paw-kelompok-11-client.vercel.app/",
      skills: ["NextJs", "Tailwind", "MongoDB"],
    },
    {
      image: "/portfolio/Damar.jpg",
      title: "DAMAR",
      role: "Fullstack Developer & UI/UX Designer",
      desc: "Aplikasi pelaporan jalan rusak, terdapat mobile app menggunakan React Native dan website sebagai dashboard.",
      link: "https://github.com/Damar-C05/damar-mobile-app",
      skills: ["ReactNative", "Laravel", "Python"],
    },
    {
      image: "/portfolio/OldPortofolio.jpg",
      title: "My Old Portfolio Website",
      role: "Frontend Developer",
      desc: "Portfolio website saya yang lama menggunakan HTML, CSS, dan Javascript Vanilla.",
      link: "https://afixv.github.io/",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: "/portfolio/180DC.jpg",
      title: "180DC UGM Website",
      role: "Frontend Developer & UI/UX Designer",
      desc: "180 Degrees Consulting UGM website yang dibuat menggunakan ReactJS dan TailwindCSS.",
      link: "https://www.figma.com/design/pt3mvOvH5849wYY9gteBbE/180-DC-Web-Design?node-id=0-1&t=lg5trXfh6zEK65PI-1",
      skills: ["React", "Tailwind", "Figma"],
    },
    {
      image: "/portfolio/Findit2022.jpg",
      title: "FindIT! UGM 2022 Website",
      role: "Frontend Developer & UI/UX Designer",
      desc: "Website FindIT! UGM 2022 saya bertugas membuat landing page serta user interfacenya.",
      link: "https://github.com/jovianjr/frontend-findit22",
      skills: ["React", "Tailwind", "Figma"],
    },
    {
      image: "/portfolio/Findit2023.jpg",
      title: "FindIT! UGM 2023 Website",
      role: "UI/UX Designer",
      desc: "Bertugas untuk membuat tampilan user interface untuk website serta platform lain, seperti media kuis dan dashboard.",
      link: "https://www.figma.com/design/vPwLRfSTdEk5a2TyyG5s5d/FIND-IT!-2023?node-id=137-2&t=zU32NY4mpxTTHc5h-1",
      skills: ["Figma"],
    },
    {
      image: "/portfolio/NightLogin.jpg",
      title: "Night Login Website",
      role: "UI/UX Designer",
      desc: "Website FindIT! UGM 2022 saya bertugas membuat landing page serta user interfacenya.",
      link: "https://www.nightlogin.id/",
      skills: ["Figma"],
    },
    {
      image: "/portfolio/Schealth.jpg",
      title: "Schealth Mobile App",
      role: "UI/UX Designer",
      desc: "Aplikasi untuk mengatur semua rutinitas kesehatan, seperti jadwal minum obat, cek kesehatan, dan lainnya.",
      link: "https://www.figma.com/design/sF3Ua4HLtmCoVnChdqnLR5/GSC-Healthy-Daily-Planner?node-id=1-2&t=x4gHDfb8KIMQFu6K-1",
      skills: ["Figma"],
    },
  ];
  return (
    <div id="projects" className="min-h-screen">
      <BgStyle pageID={"projects"} />
      <div className="flex items-center mt-0 md:mt-8 gap-4 justify-center py-10 px-6 md:px-10 flex-col min-h-screen max-w-[1080px] mx-auto">
        <div
          data-aos="fade-down"
          className="flex-col justify-center items-center max-w-lg">
          <h2 className="text-center">🚀 Highlight Project </h2>
          <p className=" text-desc text-center mt-2">
            These are some of the projects I have created. These projects have
            not only helped me build my portfolio, but also enhanced the skills
            I have developed.
          </p>
        </div>
        {/* <div className="flex flex-row gap-2">
          <button className="py-2 px-4 rounded-xl active:bg-c-secondary active:text-white bg-c-button text-c-primary font-medium text-sm">
            All
          </button>
          <button className="py-2 px-4 rounded-xl active:bg-c-secondary active:text-white bg-c-button text-c-primary font-medium text-sm">
            Website
          </button>
          <button className="py-2 px-4 rounded-xl active:bg-c-secondary active:text-white bg-c-button text-c-primary font-medium text-sm">
            Mobile App
          </button>
          <button className="py-2 px-4 rounded-xl active:bg-c-secondary active:text-white bg-c-button text-c-primary font-medium text-sm">
            UI Design
          </button>
        </div> */}
        <div
          data-aos="fade-up"
          className=" max-w-[400px] md:max-w-[1080px] mx-auto">
          <div className=" flex justify-center mt-10 flex-wrap gap-4">
            {portfolioDatas.map((project, index) => (
              <CardProject
                key={index} // Ensure you use a unique key for each mapped element
                image={project.image}
                title={project.title}
                role={project.role}
                desc={project.desc}
                link={project.link}
                skills={project.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
