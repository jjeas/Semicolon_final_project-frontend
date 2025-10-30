import React from "react";

const NavBar = () => {
  return (
    <header className="text-black shadow">
      {/* 상단 로그인 영역 */}
      <div className="flex justify-end px-6 py-2 border-b border-gray-300">
        <button className="hover:underline mr-4">로그인</button>
        <button className="hover:underline">회원가입</button>
      </div>

      {/* NavBar 메뉴 */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        {/* 왼쪽 로고 */}
        <button className="bg-blue-950 text-2xl font-bold" onClick={() => {}}>
          그린체육관
        </button>

        {/* 중앙 메뉴 */}
        <div className="text-1.5xl flex space-x-20">
          <a href="#" className="hover:text-gray-500 font-medium">
            이용안내
          </a>
          <a href="#" className="hover:text-gray-500 font-medium">
            프로그램
          </a>
          <a href="#" className="hover:text-gray-500 font-medium">
            예약신청
          </a>
          <a href="#" className="hover:text-gray-500 font-medium">
            커뮤니티
          </a>
        </div>

        {/* 오른쪽 여유 공간 */}
        <div className="w-20"></div>
      </nav>
    </header>
  );
};

export default NavBar;
