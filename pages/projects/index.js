import { useState } from "react";
import BgStyle from "@/components/bgstyle";
import CardProject from "@/components/cardProjects";
import Head from "next/head";

export default function Projects({ portfolioDatas }) {
  // const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter the portfolio data based on the selected filter
  // const filteredProjects = portfolioDatas.filter((project) => {
  //   if (selectedFilter === "All") return true;
  //   if (selectedFilter === "Website" && project.role.includes("Developer"))
  //     return true;
  //   if (
  //     selectedFilter === "Mobile App" &&
  //     project.skills.includes("ReactNative")
  //   )
  //     return true;
  //   if (
  //     selectedFilter === "UI Design" &&
  //     project.role.includes("UI/UX Designer")
  //   )
  //     return true;
  //   return false;
  // });

  const totalPages = Math.ceil(portfolioDatas.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProjects = portfolioDatas.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Head>
        <title>Afix Vega - Projects</title>
        <meta
          name="description"
          content="Explore the portfolio projects of Afix Vega Praditya, including web development, mobile apps, and UI/UX design projects. View projects like Rentalin, DAMAR, 180DC UGM, FindIT! UGM, and more."
        />
        <meta
          name="keywords"
          content="Afix Vega Praditya, Portfolio, Web Development, UI/UX Design, Mobile Apps, Next.js, React, Tailwind CSS, Figma"
        />
      </Head>
      <div id="projects" className="min-h-screen">
        <BgStyle pageID={"projects"} />
        <div className="flex items-center mt-0 md:mt-8 gap-4 justify-start py-10 px-6 md:px-10 flex-col min-h-screen max-w-[1080px] mx-auto">
          <div
            data-aos="fade-down"
            className="flex-col justify-center items-center max-w-lg">
            <h1 className="text-2xl md:text-4xl font-semibold text-center">
              🚀 Highlight Project{" "}
            </h1>
            <p className=" text-desc text-center mt-4">
              These are some of the projects I have created. These projects have
              not only helped me build my portfolio, but also enhanced the
              skills I have developed.
            </p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="flex flex-row gap-2 mb-6">
            <button
              onClick={() => setSelectedFilter("All")}
              className={`py-2 px-4 rounded-xl ${
                selectedFilter === "All"
                  ? "bg-c-secondary text-white"
                  : "bg-c-button text-c-primary"
              } font-medium text-sm`}>
              All
            </button>
            <button
              onClick={() => setSelectedFilter("Website")}
              className={`py-2 px-4 rounded-xl ${
                selectedFilter === "Website"
                  ? "bg-c-secondary text-white"
                  : "bg-c-button text-c-primary"
              } font-medium text-sm`}>
              Website
            </button>
            <button
              onClick={() => setSelectedFilter("Mobile App")}
              className={`py-2 px-4 rounded-xl ${
                selectedFilter === "Mobile App"
                  ? "bg-c-secondary text-white"
                  : "bg-c-button text-c-primary"
              } font-medium text-sm`}>
              Mobile App
            </button>
            <button
              onClick={() => setSelectedFilter("UI Design")}
              className={`py-2 px-4 rounded-xl ${
                selectedFilter === "UI Design"
                  ? "bg-c-secondary text-white"
                  : "bg-c-button text-c-primary"
              } font-medium text-sm`}>
              UI Design
            </button>
          </div> */}

          <div className=" max-w-[400px] md:max-w-[1080px] mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paginatedProjects.map((project, index) => (
                <CardProject
                  dataAos="fade-right"
                  dataAosDelay={index * 100}
                  key={index}
                  image={project.image}
                  title={project.title}
                  alt={project.title + " by Afix Vega Praditya"}
                  role={project.role}
                  desc={project.desc}
                  link={project.link}
                  skills={project.skills}
                />
              ))}
            </div>

            <div data-aos="fade-up" className="flex justify-start gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="py-2 px-4 rounded-xl bg-c-button text-c-primary font-medium text-sm disabled:opacity-50"
                disabled={currentPage === 1}>
                &#8249;
              </button>
              <span className="py-2 px-4 font-medium text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="py-2 px-4 rounded-xl bg-c-button text-c-primary font-medium text-sm disabled:opacity-50"
                disabled={currentPage === totalPages}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://afix-vega.vercel.app/api/portfolio`);
  const portfolioDatas = await res.json();

  return {
    props: {
      portfolioDatas,
    },
  };
}
