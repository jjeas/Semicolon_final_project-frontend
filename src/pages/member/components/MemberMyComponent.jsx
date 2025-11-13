import React from "react";
import { Link } from "react-router-dom";

const MemberMyComponent = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">마이페이지</h2>

      <ul className="space-y-4">
        <li>
          <Link
            to="/member/memberEdit/:id"
            className="block bg-blue-50 hover:bg-blue-100 text-gray-800 font-medium py-3 px-4 rounded-lg shadow-sm transition"
          >
            정보 수정
          </Link>
        </li>
        <li>
          <Link
            to="/member/PwEditPage/:id"
            className="block bg-blue-50 hover:bg-blue-100 text-gray-800 font-medium py-3 px-4 rounded-lg shadow-sm transition"
          >
            비밀번호 변경
          </Link>
        </li>
        <li>
          <Link
            to="/member/reservation"
            className="block bg-blue-50 hover:bg-blue-100 text-gray-800 font-medium py-3 px-4 rounded-lg shadow-sm transition"
          >
            예약 내역 조회
          </Link>
        </li>
        <li>
          <Link
            to="/member/inquiry"
            className="block bg-blue-50 hover:bg-blue-100 text-gray-800 font-medium py-3 px-4 rounded-lg shadow-sm transition"
          >
            1:1 문의
          </Link>
        </li>
        <li>
          <Link
            to="/member/partnerRequest"
            className="block bg-blue-50 hover:bg-blue-100 text-gray-800 font-medium py-3 px-4 rounded-lg shadow-sm transition"
          >
            파트너 신청
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MemberMyComponent;
