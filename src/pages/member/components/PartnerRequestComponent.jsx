import React from "react";

const PartnerRequestComponent = ({ clickHandler }) => {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">파트너 신청</h2>
        <p className="text-gray-500 mt-2">
          파트너 회원이 되면 강사 활동이 가능합니다.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10 border border-gray-100">
        <section>
          <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
            강좌 분야 선택
          </h3>

          <div className="grid grid-cols-3 gap-4 mt-4 text-gray-700 text-sm">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name={"수영"}
                onClick={clickHandler}
                className="w-5 h-5 accent-blue-600"
              />
              수영
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name={"헬스"}
                onClick={clickHandler}
                className="w-5 h-5 accent-blue-600"
              />
              헬스
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name={"골프"}
                onClick={clickHandler}
                className="w-5 h-5 accent-blue-600"
              />
              골프
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name={"무용"}
                onClick={clickHandler}
                className="w-5 h-5 accent-blue-600"
              />
              무용
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name={"풋살"}
                onClick={clickHandler}
                className="w-5 h-5 accent-blue-600"
              />
              풋살
            </label>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
            증빙 자료 업로드
          </h3>

          <div className="space-y-5 mt-4">
            <div>
              <span className="font-medium text-gray-800">이력서</span>
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                학력 및 경력 사항을 필수로 입력해 주세요. (PDF/DOC/DOCX) <br />
              </p>
            </div>

            <div>
              <span className="font-medium text-gray-800">자격증</span>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                관련 자격증을 첨부해 주세요. (JPG/JPEG/PNG) <br />
              </p>
            </div>

            <div>
              <span className="font-medium text-gray-800">계좌 사본</span>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">
                예금주명은 실명과 동일해야 합니다. (JPG/JPEG/PNG) <br />
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
            동의 사항
          </h3>

          <div className="space-y-3 mt-4">
            <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
              보험 가입 여부
            </label>

            <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
              <input type="checkbox" className="w-5 h-5 accent-blue-600" />
              사고 책임 동의
            </label>
          </div>
        </section>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <button className="px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:bg-gray-200 text-gray-800 transition">
          취소
        </button>
        <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 shadow-md transition">
          신청하기
        </button>
      </div>
    </div>
  );
};

export default PartnerRequestComponent;
