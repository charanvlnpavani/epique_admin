import { TriangleAlert, type LucideIcon } from "lucide-react";

interface NotFound {
  id: number;
  title: string;
  icon: LucideIcon;
  desc: string;
}

export const notFound: NotFound[] = [
  {
    id: 1,
    title: "Not Found",
    icon: TriangleAlert,
    desc: "The page you are looking for does not exist. Please check the URL or return to the homepage.",
  },
];
