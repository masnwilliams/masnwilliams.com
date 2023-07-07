import { CardProps } from "@/lib/types";

export const statusClasses = (status: CardProps["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-200 text-green-700";
    case "inactive":
      return "bg-gray-200 text-gray-700";
    case "unmaintained":
      return "bg-yellow-200 text-yellow-700";
    case "acquired":
      return "bg-blue-400 text-blue-600";
  }
};
