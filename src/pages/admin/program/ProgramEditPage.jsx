import React, { useEffect, useState } from "react";
import { getOne } from "../../../api/programApi";
import { programModify } from "../../../api/adminApi";
import { useLocation } from "react-router-dom";

const initState = {
  content: "",
  programeName: "",
};
const ProgramEditPage = ({ moveUrl }) => {
  const [data, setData] = useState(initState);

  // const location = useLocation();
  // const isAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getOne(moveUrl.slice(-1));
        setData(res);
      } catch (error) {
        console.error("가져오기 실패", error);
      }
    };
    f();
  }, [moveUrl]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const f = async () => {
      try {
        const res = await programModify(moveUrl, data);
        console.log(res);
      } catch (error) {
        console.error("보내기 실패", error);
      }
    };
    f();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea
          name="content"
          className="
            w-full 
            h-[calc(100vh-220px)] 
            resize-none 
            p-4 
            border 
            rounded-xl 
            shadow-inner 
            bg-white 
            text-gray-800 
            font-mono 
            text-sm 
            leading-relaxed 
            "
          value={data.content}
          onChange={changeHandler}
        />
        <input type="submit" value="수정" />
      </form>
    </div>
  );
};

export default ProgramEditPage;
