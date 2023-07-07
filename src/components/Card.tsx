import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/lib/types";
import { ExternalLinkIcon } from "@/components/Icons";

const Card = ({ title, image, description, link, status }: CardProps) => {
  const statusClasses = (status: CardProps["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-200 text-green-700";
      case "inactive":
        return "bg-gray-200 text-gray-700";
      case "acquired":
        return "bg-blue-200 text-blue-700";
      case "unmaintained":
        return "bg-yellow-200 text-yellow-700";
    }
  };

  return (
    <>
      <Link href={link} target={"_blank"}>
        <div className=" max-w-sm rounded-2xl overflow-hidden hover:bg-gray-100 hover:scale-105 transition-all relative group">
          <div className="text-gray-500 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ExternalLinkIcon size={16} />
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center space-x-4">
              {image && (
                <div className="w-8 h-8 relative">
                  <Image
                    src={image}
                    alt={title}
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
              )}
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <p className="text-gray-700 text-sm pt-2">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span
              className={
                statusClasses(status) +
                " inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              }
            >
              {status}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
