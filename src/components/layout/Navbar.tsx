import React from "react";
import Link from "next/link"; // Importa Link da Next.js

import { FaPlus, FaComment, FaHome, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-gray-700 text-white p-2 shadow-lg">
      <ul className="flex space-x-6">
        <li className="flex items-center">
          <Link href="#">
              <span className="text-xl">C</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="#" className="flex justify-center items-center gap-1">
            <FaHome />
            <span className="title font-medium">Royal admin</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="#" className="flex justify-center items-center gap-1">
            <FaComment />
            <span className="text-sm">1</span>
          </Link>
        </li>
        <li className="relative group flex items-center">
            <Link href="#" className="flex justify-center items-center gap-1">
                <FaPlus />
                <span className="title font-medium">New</span>
            </Link>
            <ul className="absolute  top-full left-1/2 space-y-2 bg-white text-black p-4 rounded shadow-lg hidden group-hover:block group-hover:visible hover:block text-sm">
                <li className="">
                    <Link href="#">
                        New Post
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        New Page
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        New Category
                    </Link>
                </li>
            </ul>
        </li>

      </ul>
      <ul className="flex space-x-4 ">
        <li className="relative group">
          <Link href="#" className="flex justify-center items-center gap-1 py-2">
              <FaUser />
              <span className="font-medium">Hello AminAli!</span>
          </Link>
          <ul className="absolute  top-full space-y-2 bg-white text-black p-4 rounded shadow-lg hidden group-hover:block group-hover:visible hover:block text-sm">
            <li>
              <Link href="#">
                Edit profile
              </Link>
            </li>
            <li>
              <Link href="#">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
