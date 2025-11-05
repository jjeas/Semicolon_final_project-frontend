import React, { useState } from "react";
import { allMenuItems } from "../../util/navData";

const AdminRightMenuBar = ({ onSelectSub, moveUrl }) => {
  const [selectMain, setSelectMain] = useState(null);
  const [selectSub, setSelectSub] = useState(null);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const selectedMainMenu = allMenuItems.find((menu) => menu.id === selectMain);

  const handleSelectMain = (mainMenu) => {
    setSelectMain(mainMenu);
    setSelectSub(null);
    setShowMainMenu(false);
    setShowSubMenu(false);
    onSelectSub(null);
  };

  const handleSelectSub = (subMenu) => {
    setSelectSub(subMenu);
    setShowSubMenu(false);
    onSelectSub(subMenu);
  };

  return (
    <div className="flex justify-between gap-4">
      {/* 1차 메뉴 버튼 */}
      <div className="relative w-1/2">
        <button
          onClick={() => {
            setShowMainMenu((prev) => !prev);
            setShowSubMenu(false);
          }}
          className="w-full flex justify-between items-center px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50 transition"
        >
          <span>
            {selectMain
              ? allMenuItems.find((m) => m.id === selectMain)?.title
              : "1차 메뉴 선택"}
          </span>
          <span
            className={`transition-transform ${
              showMainMenu ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {/* 1차 메뉴 드롭다운 */}
        {showMainMenu && (
          <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
            {allMenuItems.map((menu) => (
              <button
                key={menu.id}
                onClick={() => handleSelectMain(menu.id)}
                className={`block w-full text-left px-4 py-2 text-sm transition
                  ${
                    selectMain === menu.id
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
              >
                {menu.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 2차 메뉴 버튼 */}
      <div className="relative w-1/2">
        <button
          onClick={() => {
            if (!selectMain) return;
            setShowSubMenu((prev) => !prev);
            setShowMainMenu(false);
          }}
          disabled={!selectMain}
          className={`w-full flex justify-between items-center px-4 py-2 border rounded-md shadow-sm transition
            ${
              selectMain
                ? "bg-white hover:bg-gray-50"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
        >
          <span>{selectSub || "2차 메뉴 선택"}</span>
          <span
            className={`transition-transform ${
              showSubMenu ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {/* 2차 메뉴 드롭다운 */}
        {showSubMenu && selectedMainMenu && (
          <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
            {selectedMainMenu.subMenus.map((sub, index) => (
              <button
                key={index}
                onClick={() => {
                  handleSelectSub(sub.title);
                  moveUrl(sub.path);
                }}
                className={`block w-full text-left px-4 py-2 text-sm transition
                  ${
                    selectSub === sub.title
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRightMenuBar;
