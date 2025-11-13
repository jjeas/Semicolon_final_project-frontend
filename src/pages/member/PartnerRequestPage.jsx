import React, { useEffect, useState } from "react";
import PartnerRequestComponent from "./components/PartnerRequestComponent";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PartnerRequestPage = () => {
  const [partnerClass, setPartnerClass] = useState({
    수영: false,
    헬스: false,
    골프: false,
    무용: false,
    풋살: false,
  });

  const [partnerAgree, setPartnerAgree] = useState({
    privacyAgreement: false,
    thirdAgreement: false,
    serviceAgreement: false,
    partnerAgreement: false,
    taxAgreement: false,
    insuranceAgreement: false,
  });

  const navigate = useNavigate();

  const [classCheck, setClassCheck] = useState(false);
  const [fileCheck, setFileCheck] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);

  const resumeRef = useRef(null);
  const certRef = useRef(null);
  const bankRef = useRef(null);
  // const [fileName, setFileName] = useState("");

  useEffect(() => {
    console.log(
      "partnerClass",
      partnerClass,
      "classCheck",
      classCheck,
      "partnerAgree",
      partnerAgree,
      "agreeCheck",
      agreeCheck
    );
  }, [partnerClass, partnerAgree]);

  useEffect(() => {
    const classChecked = Object.values(partnerClass).some((i) => i === true);
    setClassCheck(classChecked);

    const agreeChecked = Object.values(partnerAgree).every((i) => i === true);
    setAgreeCheck(agreeChecked);
  }, [partnerClass, partnerAgree]);

  // const fileFn = () => {};

  const checkClassHandler = (e) => {
    const { name } = e.target;
    const selectClass = partnerClass[name];
    setPartnerClass({ ...partnerClass, [name]: !selectClass });
  };

  const checkAgreeHandler = (e) => {
    const { name } = e.target;
    const selectAgreement = partnerAgree[name];
    setPartnerAgree({ ...partnerAgree, [name]: !selectAgreement });
  };

  const cancelHandler = () => {
    if (window.confirm("파트너 신청을 취소하시겠습니까?")) {
      alert("신청이 취소되었습니다.");
      navigate("/member");
    }
  };

  const requestHandler = () => {
    if (classCheck && agreeCheck) {
      alert("신청이 완료되었습니다");

      navigate("/");
    } else if (!classCheck && agreeCheck) {
      console.log("classCheck", classCheck, "partnerClass", partnerClass);
      alert("강좌 분야는 최소 한 개 이상 체크해 주세요");
      // } else if (!fileCheck) {
      //   alert("이력서와 계좌 사본은 필수입니다");
    } else if (classCheck && !agreeCheck) {
      alert("필수 동의 사항을 체크해 주세요");
    } else {
      alert("양식을 다시 확인해 주세요");
    }
  };

  return (
    <PartnerRequestComponent
      checkClassHandler={checkClassHandler}
      checkAgreeHandler={checkAgreeHandler}
      resumeRef={resumeRef}
      certRef={certRef}
      bankRef={bankRef}
      cancelHandler={cancelHandler}
      requestHandler={requestHandler}
    />
  );
};

export default PartnerRequestPage;
