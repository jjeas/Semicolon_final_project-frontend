const MemberComponent = ({ data, changeHandler }) => {
  console.log("page 에서 넘어온 data", data, "page 에서 넘어온 changeHandler", changeHandler);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">개인 정보 수정</h2>

      <ul className="space-y-5">
        <li className="flex flex-col">
          <label className="font-semibold mb-1">회원 유형</label>
          <input
            type="text"
            name="memberRole"
            value={data.memberRole}
            className="bg-gray-100 rounded p-2"
            disabled
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">아이디</label>
          <input
            type="text"
            name="memberLoginId"
            value={data.memberLoginId}
            className="bg-gray-100 rounded p-2"
            disabled
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">이름</label>
          <input
            type="text"
            name="memberName"
            value={data.memberName}
            className="bg-gray-100 rounded p-2"
            disabled
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">이메일</label>
          <input
            type="email"
            name="memberEmail"
            value={data.memberEmail}
            className="border rounded p-2"
            onChange={changeHandler}
          />
          <p className="text-sm text-gray-600 mt-1 leading-5">
            입력하신 이메일 주소로 주요 안내 및 공지사항이 발송됩니다.
            <br />
            정확한 이메일 정보를 입력해 주세요.
          </p>
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">전화번호</label>
          <input
            type="tel"
            name="memberPhoneNumber"
            value={data.memberPhoneNumber}
            className="border rounded p-2"
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">생년월일</label>
          <input
            type="number"
            name="memberBirthDate"
            value={data.memberBirthDate}
            className="bg-gray-100 rounded p-2"
            disabled
          />
        </li>

        <li>
          <span className="font-semibold block mb-2">성별</span>
          <label className="mr-4">
            <input
              type="radio"
              id="user_gender_M"
              name="user_gender"
              disabled
            />{" "}
            남자
          </label>
          <label>
            <input
              type="radio"
              id="user_gender_F"
              name="user_gender"
              disabled
            />{" "}
            여자
          </label>
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">주소</label>
          <input
            type="text"
            name="memberAddress"
            value={data.memberAddress}
            className="border rounded p-2"
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">비밀번호</label>
          <input
            type="password"
            name="memberPassword"
            value={data.memberPassword}
            className="border rounded p-2"
            placeholder=""
          />
        </li>

        <li className="flex flex-col">
          <label className="font-semibold mb-1">비밀번호 확인</label>
          <input
            type="password"
            name="memberPassword"
            value={data.memberPassword}
            className="border rounded p-2"
          />
        </li>
      </ul>

      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
        수정
      </button>
    </div>
  );
};

export default MemberComponent;
