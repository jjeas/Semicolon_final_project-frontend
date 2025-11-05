import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MemberComponent from "../../components/member/MemberComponent";
import { getOne } from "../../api/memberApi";

const MemberEditPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const f = async () => {
      const data = await getOne(id);
      console.log("useEffect data", data);
      setData(data);
    };
    f();
  }, [id]);

  const changeHandler = (e) => {
    console.log("changeHandler e", e);
    const { name, value } = e.target;
    console.log("changeHandler name", name, "changeHandler value", value);
    setData({ ...data, [name]: value });
  };

  return <MemberComponent data={data} changeHandler={changeHandler} />;
};

export default MemberEditPage;
