import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      {/* 상단 로그인/회원가입 */}
      <div className="bg-blue-950 flex space-x-8 justify-end px-8 py-3 text-sm text-white border-b border-gray-200">
        <button className="hover:underline mr-2">로그인</button>
        <button className="hover:underline mr-2">회원가입</button>
        <button className="hover:underline">마이페이지</button>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="flex justify-between items-center px-10 py-7 border-b border-gray-200">
        {/* 로고 */}
        <div className="text-[30px] font-bold text-gray-800">그린체육관</div>

        {/* 메뉴 */}
        <ul className="flex-1 flex justify-center space-x-40 text-lg font-bold">
          <li className="hover:text-blue-600 cursor-pointer">이용안내</li>
          <li className="hover:text-blue-600 cursor-pointer">프로그램</li>
          <li className="hover:text-blue-600 cursor-pointer">예약신청</li>
          <li className="hover:text-blue-600 cursor-pointer">커뮤니티</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
