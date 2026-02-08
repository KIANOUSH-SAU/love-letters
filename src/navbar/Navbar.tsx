import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { FaEnvelope, FaHeart, FaPen, FaHistory } from "react-icons/fa";

export function Navbar() {
  return (
    <Sidebar
      aria-label="Navigation Sidebar"
      // 1. Sidebar container: full height, fixed width, specific color
      className="fixed left-0 top-0 h-screen w-60 border-r"
      theme={{
        root: {
          base: "h-full bg-[#fdf5d7] border-r border-amber-200", // Color matches your screenshot
          inner: "h-full overflow-y-auto px-0 py-0", // Remove padding to make borders touch edges
        },
      }}
    >
      <SidebarItems>
        <SidebarItemGroup className="mt-0 space-y-0 border-t-0 p-0">
          <SidebarItem
            href="#"
            icon={FaEnvelope} // Icon prop automatically places it on the left
            // 3. Styling: border-bottom, padding for height, and removing rounded corners
            className="border-b-2 border-amber-200/50 py-6 rounded-none hover:bg-amber-100/50 transition-colors group ml-2"
          >
            {/* 4. Text: placed right next to the icon */}

            <span className="text-lg font-semibold text-primary/80 ml-2">
              My Letters
            </span>
            <div className="w-3 h-3 rounded-full bg-green-300" />
          </SidebarItem>
          <SidebarItem
            href="#"
            icon={FaPen}
            className="border-b-2 border-amber-200/50 py-6 rounded-none hover:bg-amber-100/50 transition-colors group ml-2"
          >
            <span className="text-lg font-semibold text-primary/80 ml-2">
              Write New
            </span>
          </SidebarItem>
          <SidebarItem
            href="#"
            icon={FaHeart}
            className="border-b-2 border-amber-200/50 py-6 rounded-none hover:bg-amber-100/50 transition-colors group ml-2"
          >
            <span className="text-lg font-semibold text-primary/80 ml-2">
              Favorites
            </span>
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
