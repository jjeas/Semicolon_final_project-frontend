import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
    </div>
  );
};

export default ProgramListPage;
