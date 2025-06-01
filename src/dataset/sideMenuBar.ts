import { BookOpen, Cog, LayoutDashboard, SquareStack } from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface SideMenuBar {
  id: number;
  title: string;
  icon: LucideIcon;
  url: string;
  routeName?: string;
}

export const sideMenuBar: SideMenuBar[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
    routeName: "dashboard",
  },
  {
    id: 2,
    title: "Stories",
    icon: BookOpen,
    url: "/stories",
    routeName: "stories",
  },
  {
    id: 3,
    title: "Categories",
    icon: SquareStack,
    url: "/categories",
    routeName: "categories",
  },
  {
    id: 4,
    title: "Settings",
    icon: Cog,
    url: "/settings",
    routeName: "settings",
  },
];
