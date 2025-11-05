const MemberComponent = ({
  data,
  changeHandler,
  clickHandler,
  userGender,
  userBirth,
  openAddress,
  openPwCheck,
  pwCheckModal,
  PwChecker
}) => {
  console.log(
    "page 에서 넘어온 data",
    data,
    "page 에서 넘어온 userGender",
    userGender,
    "page 에서 넘어온 userBirth",
    userBirth,
    "page 에서 넘어온 openAddress",
    openAddress
  );

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">개인 정보 수정</h2>

      <form>
        <ul className="space-y-5">
          <li className="flex flex-col">
            <label className="font-semibold mb-1">회원 유형</label>
            <input
              className="bg-gray-100 rounded p-2"
              type="text"
              name="memberRole"
              value={data.memberRole}
              disabled
            />
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">아이디</label>
            <input
              className="bg-gray-100 rounded p-2"
              type="text"
              name="memberLoginId"
              value={data.memberLoginId}
              disabled
            />
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">이름</label>
            <input
              className="bg-gray-100 rounded p-2"
              type="text"
              name="memberName"
              value={data.memberName}
              disabled
            />
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">이메일</label>
            <input
              className="border rounded p-2"
              type="email"
              name="memberEmail"
              value={data.memberEmail}
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
              className="border rounded p-2"
              type="tel"
              name="memberPhoneNumber"
              value={data.memberPhoneNumber}
              onChange={changeHandler}
            />
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">생년월일</label>
            <input
              className="bg-gray-100 rounded p-2"
              type="text"
              name="memberBirthDate"
              value={userBirth}
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
                checked={userGender[0]}
                disabled
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                id="user_gender_F"
                name="user_gender"
                checked={userGender[1]}
                disabled
              />
              여자
            </label>
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">주소</label>
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1f3a93] focus:border-[#1f3a93] transition"
                type="text"
                name="memberAddress"
                value={data.memberAddress}
                onChange={changeHandler}
              />
              <button
                type="button"
                onClick={openAddress}
                className="bg-[#1f3a93] text-white px-4 rounded-lg font-semibold hover:bg-[#172d73] transition"
              >
                주소 찾기
              </button>
            </div>
          </li>

          <li className="flex flex-col">
            <label className="font-semibold mb-1">비밀번호</label>
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1f3a93] focus:border-[#1f3a93] transition"
                type="password"
                name="memberPassword"
                value={data.memberPassword}
                onChange={changeHandler}
              />
              <button
                type="button"
                onClick={openPwCheck}
                className="bg-[#1f3a93] text-white px-4 rounded-lg font-semibold hover:bg-[#172d73] transition"
              >
                비밀번호 확인
              </button>
            </div>
            {pwCheckModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                <div className="bg-white w-80 max-w-sm rounded-xl p-6 shadow-xl animate-fadeIn">
                  <h2 className="font-semibold mb-3 text-center">
                    비밀번호 확인
                  </h2>
                  <input
                    className="border p-2 w-full rounded"
                    type="password"
                    name="memberPasswordCheck"
                    onChange={changeHandler}
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={PwChecker}
                    >
                      확인
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={openPwCheck}
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </form>

      <button
        className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        onClick={clickHandler}
      >
        수정
      </button>
    </div>
  );
};

export default MemberComponent;
