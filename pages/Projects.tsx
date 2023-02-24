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
      <div className="">
        <div className="max-w-[1440px] mr-auto ml-auto  border-4 border-gray-800">
          <ProjectHeading />
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Projects;
