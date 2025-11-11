import React, { useState } from "react";
import AdminRightMenuBar from "./AdminRightMenuBar";
import AdminEditArea from "./AdminEditArea";

const AdminPage = () => {
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [moveUrl, setMoveUrl] = useState("");

  return (
    <div className="flex flex-col bg-gray-50 p-6 min-h-screen">
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {/* 관리자페이지 왼쪽 기능 칸 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow p-6 text-center font-semibold">
            강좌 개설 신청내역
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center font-semibold">
            일일이용 신청내역
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center font-semibold">
            파트너 승급 신청내역
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center font-semibold">
            회원 검색
          </div>
          <div className="col-span-2 bg-white rounded-2xl shadow p-6 text-center font-semibold">
            통계 대시보드
          </div>
        </div>

        {/* 관리자페이지 오른쪽 기능 칸 */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
          {/* 메뉴 선택 + 수정영역 */}
          <div className="w-full flex flex-col gap-6">
            <AdminRightMenuBar
              onSelectSub={setSelectedSubMenu}
              moveUrl={setMoveUrl}
            />
            {/* <AdminEditArea subMenu={selectedSubMenu} moveUrl={moveUrl} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
