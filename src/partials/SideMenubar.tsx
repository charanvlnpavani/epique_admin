import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { sideMenuBar } from "@/dataset/sidemenubar/sideMenuBar";
import { NavLink } from "react-router-dom"; // Add this import
import { LogOut } from "lucide-react";
import ButtonClick from "@/components/button/ButtonClick";

const SideMenubar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-3xl font-bold text-center">Epique</h1>
      </SidebarHeader>
      <SidebarContent>
        <ul className="sidebar-list">
          {sideMenuBar.map((items) => (
            <NavLink
              key={items.id}
              to={items.url}
              className={({ isActive }) =>
                `no-underline menuSidebar ${
                  isActive ? "active font-bold bg-gray-100" : ""
                }`
              }
            >
              <li className="sidebar-item flex flex-row items-center gap-5 px-5 py-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200 rounded-2xl ">
                <items.icon />
                {items.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </SidebarContent>
      <SidebarFooter>
        <ButtonClick
          label="Logout"
          onClick={() => {
            // Handle logout logic here
            console.log("Logout clicked");
          }}
          variant="outline"
          className="w-full flex items-center cursor-pointer justify-center gap-2 text-red-600 hover:text-red-500"
          icon={<LogOut className="size-4" />}
          iconPosition="left"
          size="default"
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideMenubar;
