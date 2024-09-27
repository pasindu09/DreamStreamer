import React, { useState } from 'react';
import SidebarItem from './SideBarItem';
import Logo from './Logo';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Icons for toggle

const sidebarItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bda8d66315d39131e3c01ea914659433f47e469068e7fb1b080f911d2268d9a8?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e', text: 'Home' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/50ad73871e81a946e40d7ac759c17feaefc849a33b0be0c8fb73a1128586dfeb?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e', text: 'Your Library' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e894e6bd7185032abe6cb3726d998a2d274f632c6161e428e2067793b8d403c8?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e', text: 'Create Playlist' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d4057fc3e826f60e1392346e320b46bb05657edc0d6429a77d2580dcb3c8e22b?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e', text: 'Liked Songs' },
];

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 h-full flex flex-col w-[15%] bg-black text-lg text-white overflow-hidden transition-all duration-300`}>
      <div className="flex items-center justify-between px-4 py-6">
        <Logo />
        
      </div>
      <ul className="flex-1 mt-10 overflow-y-auto no-scrollbar">
        {sidebarItems.map((item, index) => (
          <li key={index} className="py-2">
            <SidebarItem 
              icon={item.icon} 
              text={item.text} 
              className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-neutral-800 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}
              collapsed={isCollapsed}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
