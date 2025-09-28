import React from 'react';
import { FileText, Menu, User, Bell } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FormCraft Pro</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8">
              <a href="#dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#forms" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Forms
              </a>
              <a href="#pricing" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#support" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Support
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}