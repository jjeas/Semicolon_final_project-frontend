import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getOne } from "../../api/programApi";
import remarkGfm from "remark-gfm";

const initState = {
  content: "",
  programeName: "",
};

const ProgramListPage = () => {
  const { programId } = useParams();
  const [data, setData] = useState(initState);
  const location = useLocation();
  const adminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getOne(programId);
        console.log("가져온 Data", res);
        setData(res);
      } catch (error) {
        console.error("가져오기 실패", error);
      }
    };
    f();
  }, [programId]);

  return (
    <div className="prose pl-40 whitespace-nowrap">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
      {adminPage ? (
        <Link to={`/admin/program/update/${programId}`} className="pl-20">
          수정하기
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProgramListPage;
