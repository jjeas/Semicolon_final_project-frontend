import axios from "axios";
const API_SERVER_HOST = "http://localhost:8080/api";

export const programModify = async (moveUrl, data) => {
  console.log("주소확인", moveUrl);
  var str = `${API_SERVER_HOST}${moveUrl}`;
  const res = await axios.put(str, data);
  console.log("backend로부터 온데이터 ", res.data);
  return res.data;
};

export const programGetList = async () => {
  var str = `${API_SERVER_HOST}/program/`;
  const res = await axios.get(str);
  console.log("backend로부터 온데이터 ", res.data);
  return res.data;
};
