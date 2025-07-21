import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/lib/types";
import { ExternalLinkIcon } from "@/components/Icons";

const Card = ({ title, image, description, link, status }: CardProps) => {
  const statusClasses = (status: CardProps["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "inactive":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "acquired":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "unmaintained":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <>
      <Link href={link} target={"_blank"}>
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden hover:bg-gray-50 hover:scale-105 transition-all duration-300 relative group shadow-sm border border-gray-100 hover:shadow-md">
          <div className="text-gray-400 absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ExternalLinkIcon size={16} />
          </div>
          <div className="px-6 py-5">
            <div className="flex items-center space-x-4 mb-3">
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
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
          <div className="px-6 pb-5">
            <span
              className={
                statusClasses(status) +
                " inline-block rounded-full px-3 py-1 text-xs font-medium border"
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
