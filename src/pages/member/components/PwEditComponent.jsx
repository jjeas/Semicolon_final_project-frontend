import { FaRegCheckSquare } from "react-icons/fa";

const PwEditComponent = ({ data, changeHandler, clickHandler, pwCorrect }) => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <ul className="space-y-5">
        <li className="flex flex-col">
          <label className="font-semibold mb-0.5 text-gray-800">
            새 비밀번호
          </label>
          <div className="flex gap-2">
            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#1f3a93] focus:border-[#1f3a93] transition"
              type="password"
              name="memberPassword"
              onChange={changeHandler}
            />
          </div>
        </li>
        <li className="flex flex-col">
          <label className="font-semibold mb-0.5 text-gray-800">
            비밀번호 확인
          </label>
          <div className="flex gap-2">
            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#1f3a93] focus:border-[#1f3a93] transition"
              type="password"
              name="memberPasswordCheck"
              onChange={changeHandler}
            />
          </div>

          {pwCorrect ? (
            <p className="text-green-600 flex items-center gap-1 text-sm mt-1">
              <FaRegCheckSquare />
              비밀번호가 동일합니다.
            </p>
          ) : (
            <p className="text-red-600 text-sm mt-1">
              비밀번호를 확인해 주세요.
            </p>
          )}
        </li>
      </ul>
      <button
        className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        onClick={clickHandler}
      >
        수정
      </button>
    </div>
  );
};

export default PwEditComponent;
