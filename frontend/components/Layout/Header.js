import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

const Header = ({ onSidebarToggle, isDarkMode, onThemeToggle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ProjectPulse
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="p-2 rounded-full hover:bg-gray-100 sm:hidden transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-6 h-6 text-gray-600" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;