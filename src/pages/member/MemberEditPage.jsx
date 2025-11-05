import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MemberComponent from "../../components/member/MemberComponent";
import { getOne, register } from "../../api/memberApi";

const MemberEditPage = () => {
  const isCheck = (formCheck) => {
    const { memberEmail, memberPhoneNumber } = formCheck;
    console.log("memberPhoneNumber", memberPhoneNumber);
    if (memberEmail === "" || memberPhoneNumber === "") return false;
    else return true;
  };

  const pwCheck = (formCheck) => {
    const { memberPassword, memberPasswordCheck } = formCheck;
    if (memberPassword && memberPassword !== memberPasswordCheck) return false;
    else return true;
  };
  const [data, setData] = useState({});
  const [formCheck, setFormCheck] = useState(data);
  const { id } = useParams();
  const [userGender, setUserGender] = useState([false, false]);
  const [userBirth, setUserBirth] = useState("");
  const navigate = useNavigate();
  const [pwCheckModal, setPwCheckModal] = useState(false);

  useEffect(() => {
    const f = async () => {
      const data = await getOne(id);
      console.log("useEffect data", data);
      setData(data);

      if (data.memberBirthDate)
        setUserBirth(data.memberBirthDate.substring(0, 10));

      if (data.memberGender == "남자") setUserGender([true, false]);
      else setUserGender([false, true]);
    };
    f();
  }, [id]);

  const changeHandler = (e) => {
    console.log("changeHandler e", e);
    const { name, value } = e.target;
    console.log("changeHandler name", name, "changeHandler value", value);
    setData({ ...data, [name]: value });
    setFormCheck({ ...formCheck, [name]: value });
    console.log("formCheck", formCheck);
  };

  const openAddress = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setData({ ...data, ["memberAddress"]: data.address });
      },
    }).open();
  };

  const openPwCheck = (e) => {
    e.preventDefault();
    setPwCheckModal(!pwCheckModal);
    setFormCheck({ ...formCheck, ["memberPassword"]: data.memberPassword})
  };

  const PwChecker = (e) => {
    e.preventDefault();
    if(pwCheck(formCheck)) {
      alert("비밀번호가 동일합니다") 
      setPwCheckModal(!pwCheckModal);
    }
    else {
      alert("비밀번호를 다시 확인해 주세요")
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("clickHandler formCheck", formCheck);
    if (isCheck(formCheck) && pwCheck(formCheck)) {
      register(id, data);
      alert("수정이 완료되었습니다");
      navigate("/");
    } else if (!pwCheck(formCheck)) {
      alert("비밀번호 확인이 일치하지 않습니다");
    } else {
      console.log("formcheck", formCheck);
      alert("필수 정보를 모두 입력해 주세요");
    }
  };

  return (
    <MemberComponent
      data={data}
      changeHandler={changeHandler}
      userGender={userGender}
      userBirth={userBirth}
      openAddress={openAddress}
      clickHandler={clickHandler}
      openPwCheck={openPwCheck}
      pwCheckModal={pwCheckModal}
      PwChecker={PwChecker}
    />
  );
};

export default MemberEditPage;
