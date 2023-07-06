import Link from "next/link";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

const SocialLinks = () => {
  return (
    <div className="fixed top-11 right-0 pr-32 invisible sm:visible">
      <ul className="flex items-center space-x-4">
        <li className={"hover:text-blue-400 transition-all"}>
          <Link href="https://www.github.com/masnwilliams" target={"_blank"}>
            <GitHubIcon />
          </Link>
        </li>
        <li className={"hover:text-blue-400 transition-all"}>
          <Link
            href="https://www.linkedin.com/in/john-mason-williams/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </Link>
        </li>
        <li className={"hover:text-blue-400 transition-all"}>
          <Link href="https://twitter.com/@masnwilliams" target={"_blank"}>
            <TwitterIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
