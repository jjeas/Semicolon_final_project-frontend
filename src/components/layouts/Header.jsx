import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { allMenuItems } from "../../util/navData";

const Header = () => {
  const location = useLocation();
  // 마우스가 올라간 1차 메뉴의 ID를 저장 (드롭다운 제어)
  const [hoveredMenuId, setHoveredMenuId] = useState(null);

  return (
    <header className="bg-white shadow">
      {/* 상단 로그인/회원가입/마이페이지 */}
      <div className="bg-blue-950 flex space-x-8 justify-end px-8 py-3 text-sm text-white border-b border-gray-200">
        <Link to="/login" className="hover:underline mr-2">
          로그인
        </Link>
        <Link to="/register" className="hover:underline mr-2">
          회원가입
        </Link>
        {/* 마이페이지는 ALL_NAV_MENUS에 있지만, 여기서 별도 Link로 처리 */}
        <Link to="/member" className="hover:underline">
          마이페이지
        </Link>
      </div>

      {/* 메인 네비게이션 (Sub Menu 드롭다운을 위해 relative 설정) */}
      
      <nav
        className="relative flex justify-between items-center max-w-7xl mx-auto px-10 py-7 border-b border-gray-200"
        onMouseLeave={() => setHoveredMenuId(null)} // NAV 영역 벗어나면 드롭다운 닫기
      >
        {/* 로고 */}
        <Link to="/" className="text-[30px] font-bold text-gray-800">
          그린체육관
        </Link>

        {/* GNB 메뉴 영역 */}
        <ul className="flex-1 flex justify-center space-x-16 text-lg font-bold">
          {allMenuItems.map((menu) => {
            if (menu.hideInHeader) {
              return null;
            }
            const isActive = location.pathname.startsWith(menu.path);

            return (
              // 1차 메뉴 항목: relative와 이벤트 핸들러 설정
              <li
                key={menu.id}
                className="relative"
                onMouseEnter={() => setHoveredMenuId(menu.id)} // 마우스 올리면 ID 저장
              >
                <Link
                  to={menu.subMenus[0].path} // 1차 메뉴의 기본 경로로 연결
                  className={`
                    py-2 transition duration-150 ease-in-out block
                    ${
                      isActive
                        ? "text-blue-600 border-b-4 border-blue-600" // 활성 상태 스타일
                        : "text-gray-800 hover:text-blue-500" // 비활성 상태 스타일
                    }
                  `}
                >
                  {menu.title}
                </Link>

                {/* 🌟 2차 메뉴 드롭다운 영역 */}
                {/* subMenus가 있고, 현재 ID가 hoveredMenuId와 일치할 때 렌더링 */}
                {menu.subMenus && (
                  <div
                    className={`
                      absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10 
                      bg-white shadow-lg border border-gray-200 rounded-b-lg w-60 min-w-max
                      transition-all duration-300 opacity-0 pointer-events-none 
                      ${
                        hoveredMenuId === menu.id
                          ? "opacity-100 pointer-events-auto"
                          : ""
                      }
                    `}
                  >
                    {menu.subMenus.map((subMenu) => (
                      <Link
                        key={subMenu.id}
                        to={subMenu.path}
                        // 드롭다운 메뉴 항목 클릭 시, hoveredMenuId를 초기화하여 드롭다운 닫기
                        onClick={() => setHoveredMenuId(null)}
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        {/* 오른쪽 여백을 위해 빈 div 추가 */}
        <div className="w-[100px]"></div>
      </nav>
    </header>
  );
};

export default Header;
