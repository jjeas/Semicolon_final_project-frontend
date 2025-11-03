import React from "react";
import { Link } from "react-router-dom";

const MemberMyPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="memberEdit">정보 수정</Link>
        </li>
        <li>예약 내역 조회</li>
        <li>1:1 문의</li>
        <li>파트너 신청</li>
      </ul>

    </div>
  );
};

export default MemberMyPage;
