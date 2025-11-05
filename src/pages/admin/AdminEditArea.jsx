import React from "react";
import ProgramEditPage from "./edit/ProgramEditPage";

const AdminEditArea = ({ subMenu, moveUrl }) => {
  if (!subMenu)
    return (
      <div className="bg-gray-50 border rounded-xl p-6 min-h-[500px] text-center shadow-inner flex items-center justify-center text-gray-400">
        수정할 메뉴를 선택하세요.
      </div>
    );

  const selectedMenu = () => {
    switch (subMenu) {
      case "수영":
      case "헬스":
      case "골프":
      case "무용":
      case "풋살":
        return <ProgramEditPage moveUrl={moveUrl} />;
      case "공지사항 관리":
        return;
      default:
        return (
          <p className="text-gray-400">
            {subMenu
              ? `${subMenu} 페이지 준비 중...`
              : "수정할 메뉴를 선택하세요."}
          </p>
        );
    }
  };

  return (
    <div className="bg-gray-50 border rounded-xl p-6 min-h-[500px] shadow-inner">
      {selectedMenu()}
    </div>
  );
};

export default AdminEditArea;
