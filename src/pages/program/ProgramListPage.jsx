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
    getOne(programId).then((data) => {
      console.log(data);
      setData(data);
    });
  }, [programId]);

  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
    </div>
  );
};

export default ProgramListPage;
