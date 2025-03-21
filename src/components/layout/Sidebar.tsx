'use client'

import { Menus } from "@/utils/sidebarElements";
import Link from "next/link";
import React, { useState } from "react";

import { FaChevronDown, FaChevronRight} from "react-icons/fa6";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

// Sub menu type
interface SubMenuState {
  genericNote: boolean;
  plugins: boolean;
  settings: boolean;
  [key: string]: boolean; // Per evitare errori su chiavi dinamiche
}

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [subMenus, setSubMenus] = useState<SubMenuState>({
    genericNote: false,
    plugins: false,
    settings: false,
  });

  const toggleSubMenu = (menu: string) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // console.log(subMenus);
  

  return (
    <div className={`${open ? "w-80 p-5" : "w-20 p-4"} bg-gray-800 min-h-screen pt-8 relative duration-300 ease-in-out`}>
      {/* Toggle button */}
      <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && "rotate-180"} transition-all ease-in-out duration-300`}
        onClick={() => setOpen(!open)}
      >
        {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
      </div>

      {/* Logo and title */}
      <div className="flex gap-x-4 items-center">
        <img src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png" alt="logo" className={`w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && "scale-0"}`}>
          Admin Dashboard
        </h1>
      </div>

      {/* Sidebar Navbar Items */}
      <ul className="pt-6 space-y-0.5">
        {Menus.map((Menu, index) => (
          <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-gray-900 transition-all ease-in-out duration-300 ${index === 0 && "bg-zinc-800/40"}`}>
            <Link href={Menu.href}>
              <div className="flex items-center justify-between gap-x-4" onClick={() => (Menu.key && open) && toggleSubMenu(Menu.key)}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    <Menu.icon />
                  </span>
                  <span className={`${!open && "hidden"} origin-left ease-in-out duration-300`}>
                    {Menu.title}
                  </span>
                </div>

                {Menu.subMenu && (
                  <span className={`ml-auto cursor-pointer text-sm ${subMenus[Menu.key || ""] ? "rotate-360" : ""} transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""}`}>
                    {subMenus[Menu.key || ""] ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
            </Link>

            {/* Sidebar submenus */}
            {(Menu.subMenu && subMenus[Menu.key || ""] && open) && (
              <ul className="pl-3 pt-4 text-zinc-300">
                {Menu.subMenu.map((subMenu, subIndex) => (
                  <li key={subIndex} className={`flex flex-col rounded-md py-4 px-2 cursor-pointer hover:text-white text-zinc-50 hover:bg-gray-800 transition-all ease-in-out duration-300`}>
                    <div className="flex items-center justify-between gap-x-4" onClick={() => subMenu.key && toggleSubMenu(subMenu.key)}>
                      <div className="flex items-center justify-between gap-x-4">
                        <span>{subMenu.title}</span>
                        {subMenu.subItems &&
                          <span className={`ml-auto cursor-pointer text-sm ${subMenus[subMenu.key || ""] ? "rotate-360" : ""} transition-transform ease-in-out duration-300 ${!open ? "hidden" : ""}`}>
                            {subMenus[subMenu.key || ""] ?  <FaChevronDown /> : <FaChevronRight />}
                          </span>
                        }
                      </div>
                    </div>

                    {/* Sub Sub Menu  */}
                    {subMenu.subItems && subMenus[subMenu.key || ""] && (
                      <ul className="pl-3 pt-4 text-zinc-300">
                        {subMenu.subItems.map((subItem, subItemIndex) => (
                          <li key={subItemIndex} className="text-sm flex items-center gap-x-2 py-3 px-2 hover:bg-gray-900 rounded-lg">
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}

                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
