import Link from "next/link";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

const socialLinks = [
  {
    name: "GitHub",
    link: "https://www.github.com/masnwilliams",
    icon: <GitHubIcon size={28} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/john-mason-williams/",
    icon: <LinkedInIcon size={28} />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/@masnwilliams",
    icon: <TwitterIcon size={28} />,
  },
  // {
  //   name: "Threads",
  //   link: "https://threads.net/@johnmasonwilliams",
  //   icon: <ThreadsIcon size={24} />,
  // },
];

const SocialLinks = () => {
  return (
    <div className="sm:fixed sm:top-11 sm:right-0 sm:pr-32">
      <ul className="flex items-center space-x-4 text-gray-700">
        {socialLinks.map((social) => (
          <li
            key={social.name}
            className={"hover:text-blue-400 hover:scale-105 transition-all"}
          >
            <Link href={social.link} target={"_blank"}>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
