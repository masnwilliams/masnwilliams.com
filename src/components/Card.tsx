import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  title: string;
  image?: string;
  description: string;
  link: string;
  status: "active" | "inactive" | "acquired";
};

const Card = ({ title, image, description, link, status }: CardProps) => {
  const statusClasses = (status: CardProps["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-200 text-green-700";
      case "inactive":
        return "bg-yellow-200 text-yellow-700";
      case "acquired":
        return "bg-blue-200 text-blue-700";
    }
  };

  return (
    <>
      <Link href={link} target={"_blank"}>
        <div className="max-w-sm rounded-2xl overflow-hidden hover:bg-gray-100 transition-all">
          {image && (
            <Image
              src={image}
              alt={title}
              width={40}
              height={40}
              className={"mt-4 ml-4"}
            />
          )}
          <div className="px-6 py-4">
            <div className="font-bold text-md mb-2">{title}</div>
            <p className="text-gray-700 text-sm">{description}</p>
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
