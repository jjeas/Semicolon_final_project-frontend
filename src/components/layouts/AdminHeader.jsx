import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { adminAllMenuItems } from "../../util/adminData";

const AdminHeader = () => {
  const location = useLocation();
  const [hoveredMenuId, setHoveredMenuId] = useState(null);

  return (
    <header className="bg-white text-black shadow-md border-b border-gray-300">
      <div className="flex justify-between items-center px-8 py-5">
        <div className="text-2xl font-bold text-black tracking-wide">
          그린체육관 [관리자페이지]
        </div>
        <Link to="/" className="hover:underline mr-2">
          로그아웃
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
