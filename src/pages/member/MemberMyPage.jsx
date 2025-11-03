import React from "react";
import { Link } from "react-router-dom";

const MemberMyPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="memberEdit">정보 수정</Link>
        </li>
        <li>
          <Link to="reservation">예약 내역 조회</Link>
        </li>
        <li>
          <Link to="inquiry">1:1 문의</Link>
        </li>
        <li>
          <Link to="partnerRequest">파트너 신청</Link>
        </li>
      </ul>
    </div>
  );
};

export default MemberMyPage;
