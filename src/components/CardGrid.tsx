import Card, { CardProps } from "./Card";

const CardGrid = () => {
  const projects: CardProps[] = [
    {
      title: "Space Foundry",
      image: "/space-foundry.png",
      description:
        "A platform for players to buy and sell digital goods, aimed to be the platform of choice in an emerging market for all sales of digital goods.",
      link: "https://space-foundry.com/",
      status: "acquired",
    },
    {
      title: "APL.gg",
      image: "/apl-gg.png",
      description:
        "A centralized hub for the Apex Legends Esports community providing up-to-date news, tournament information, team standings, player profiles, and more.",
      link: "http://apl.gg/",
      status: "active",
    },
    {
      title: "GreenScan",
      image: "/greenscan.png",
      description:
        "A product that provides validated information about a company's sustainability efforts, helping consumers make informed decisions.",
      link: "https://greenscan.vercel.app/",
      status: "inactive",
    },
    {
      title: "StatShot",
      image: undefined,
      description:
        "A simple web app for viewing player stats and matches for the video game Halo Infinite.",
      link: "https://statshot.vercel.app/",
      status: "inactive",
    },
    {
      title: "Movie-ception",
      image: "/movie-ception.jpg",
      description:
        "A web application that allows users to search, save, and view their favorite movies and shows, with recommendations based on user preferences.",
      link: "https://movie-ception.vercel.app/",
      status: "inactive",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <Card
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          link={project.link}
          status={project.status}
        />
      ))}
    </div>
  );
};

export default CardGrid;
