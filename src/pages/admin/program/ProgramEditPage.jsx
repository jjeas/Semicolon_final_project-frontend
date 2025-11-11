import React, { useEffect, useState } from "react";
import { getOne } from "../../../api/programApi";
import { programModify } from "../../../api/adminApi";
import { useLocation, useParams } from "react-router-dom";

const initState = {
  content: "",
  programName: "",
};
const ProgramEditPage = () => {
  const [data, setData] = useState(initState);
  const { programId } = useParams();

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getOne(programId);
        setData(res);
      } catch (error) {
        console.error("가져오기 실패", error);
      }
    };
    f();
  }, [programId]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const f = async () => {
      try {
        const res = await programModify(programId, data);
        console.log(res);
      } catch (error) {
        console.error("보내기 실패", error);
      }
    };
    f();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6">
        {/* 상단 헤더 */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              (수정) {data.programName}-프로그램
            </h2>
            {/* <p className="text-gray-500 text-sm mt-1">
              {data.programName || "프로그램 이름 불러오는 중..."}
            </p> */}
          </div>
        </div>

        {/* 수정 폼 */}
        <form onSubmit={submitHandler} className="space-y-4">
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            프로그램 내용
          </label> */}

          <textarea
            name="content"
            className="
              w-full 
              h-[70vh]
              resize-none 
              p-4 
              border 
              border-gray-300 
              rounded-xl 
              bg-gray-50 
              text-gray-800 
              font-mono 
              text-sm 
              leading-relaxed 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-400 
              focus:border-blue-400 
              transition-all
            "
            value={data.content}
            onChange={changeHandler}
          />

          <div className="flex justify-end">
            <input
              type="submit"
              value="수정 완료"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProgramEditPage;
