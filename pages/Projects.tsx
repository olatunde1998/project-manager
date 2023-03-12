import Head from "next/head";
import Filter from "@/components/projectComponents/Filter";
import ProjectHeading from "@/components/projectComponents/ProjectHeading";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Project Manager | Projects </title>
        <meta name="description" content="Project Manager App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#001147] pt-[30px] lg:h-screen">
        <div className="max-w-[1024px] mr-auto ml-auto">
          <ProjectHeading/>
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Projects;
