export type CardProps = {
  title: string;
  image?: string;
  description: string;
  link: string;
  status: "active" | "inactive" | "unmaintained" | "acquired";
};
