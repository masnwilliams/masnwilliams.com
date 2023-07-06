import CardGrid from "@/components/CardGrid";

const Projects = () => {
  return (
    <>
      <div className={"font-bold text-4xl mb-2"}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Welcome to my digital corner!
      </div>

      <div className={"text-gray-700 text-base"}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm an innovative tech entrepreneur and developer with a passion for
        gaming and the developer community. Dive in to explore my blend of
        technical expertise, creative thinking, and commitment to creating
        solutions that unite and empower communities.
      </div>

      <div className={"mt-10"}>
        <CardGrid />
      </div>
    </>
  );
};

export default Projects;
