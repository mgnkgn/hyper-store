import { useShop } from "@/context/context";
import { PanelRightOpen, SquareMenu } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const { categories, setActiveCategory } = useShop();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="font-mono">
      <button
        className="p-4 text-blue-700 absolute top-3 left-0 hover:cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <SquareMenu className="text-blue-700 hover:text-zinc-200" />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-black text-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row items-center justify-between mb-4">
          <p className="text-xl font-semibold  text-blue-700">Categories</p>
          <button
            className="hover:cursor-pointer hover:bg-blue-700/70 rounded-full p-2 transition duration-200 "
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <PanelRightOpen className="text-gray-300" />
          </button>
        </div>
        <ul className="space-y-2">
          {(categories || []).map((category) => (
            <li
              key={`${category.name}-${category.active}`}
              onClick={() => setActiveCategory(category)}
              className={`uppercase cursor-pointer py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-700/70 ${
                category.active ? "bg-blue-700/90" : ""
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 "
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
