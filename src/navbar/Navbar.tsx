import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiChartPie } from "react-icons/hi";

export function Navbar() {
  return (
    <Sidebar
      aria-label="Default sidebar example"
      className="fixed left-0 top-0 h-screen"
    >
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
