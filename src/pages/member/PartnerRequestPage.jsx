import React, { useEffect, useState } from "react";
import PartnerRequestComponent from "./components/PartnerRequestComponent";
import { useRef } from "react";

const PartnerRequestPage = () => {
  const [partnerClass, setPartnerClass] = useState({
    수영: false,
    헬스: false,
    골프: false,
    무용: false,
    풋살: false,
  });

  const clickHandler = (e) => {
    const { name } = e.target;
    const selectOne = partnerClass[name];
    setPartnerClass({ ...partnerClass, [name]: !selectOne });
  };

  return <PartnerRequestComponent clickHandler={clickHandler} />;
};

export default PartnerRequestPage;
