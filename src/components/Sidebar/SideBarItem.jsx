import React from 'react';

function SidebarItem({ icon, text, className, collapsed }) {
  return (
    <div className={`${className}`}>
      <img src={icon} alt="" className="w-6 h-6" />
      {!collapsed && <span className="ml-4">{text}</span>}
    </div>
  );
}

export default SidebarItem;
