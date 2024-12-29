import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Header = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          ProjectPulse
        </h1>
        <div className="flex items-center space-x-6">
          <Link href="/auth/signin"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Sign In
          </Link>
          <Link href="/auth/signup"
             className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Sign Up
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 sm:hidden"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
