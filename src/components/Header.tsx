import React from 'react';
import { Search, Home, Users, Briefcase, MessageSquare, Bell, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
      <div className="max-w-[1128px] mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center">
          <div className="mr-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a66c2" className="w-8 h-8">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </div>
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#eef3f8] pl-10 pr-4 py-2 rounded-md w-64 border-none focus:outline-none focus:ring-1 focus:ring-[#0a66c2]"
            />
          </div>
        </div>

        <nav className="flex items-center">
          <NavItem icon={<Home className="w-6 h-6" />} label="Home" active />
          <NavItem icon={<Users className="w-6 h-6" />} label="My Network" />
          <NavItem icon={<Briefcase className="w-6 h-6" />} label="Jobs" />
          <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Messaging" />
          <NavItem icon={<Bell className="w-6 h-6" />} label="Notifications" />
          <NavItem icon={<User className="w-6 h-6" />} label="Me" />
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <a
      href="#"
      className={`flex flex-col items-center px-2 sm:px-3 py-2 ${
        active ? 'text-black border-b-2 border-black' : 'text-gray-500'
      }`}
    >
      <div>{icon}</div>
      <span className="text-xs mt-1 hidden sm:block">{label}</span>
    </a>
  );
};