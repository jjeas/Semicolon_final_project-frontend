import axios from "axios";
import { format, parseISO } from "date-fns";

const API_HOST_URL = "http://localhost:8080/api/notice";

export const getNoticeList = async () => {
    const res = await axios.get(`${API_HOST_URL}/list`)
    console.log("백엔드 notice 리스트=", res.data)
    if (res.data == null) console.log("공지사항 data 없음")
    return res.data
}
export const registerNotice = async (notice) => { 
    const res = await axios.post(`${API_HOST_URL}/register`, notice)
    console.log("백엔드에 보낸 notice 등록 데이터", res.data)
    return res.data
}
export const modifyNotice = async (notice) => {
  const res = await axios.put(`${API_HOST_URL}/${notice.noticeId}`, notice);
  console.log("백엔드에 보내는 notice 수정데이터 ", res.data);
  return res.data;
};
export const increaseViewCount = async (id) => {
  const res = await axios.post(`${API_HOST_URL}/${id}/view`);
  return res.data;
};

export const getOneNotice = async (id) => {
  const res = await axios.get(`${API_HOST_URL}/${id}`);
  console.log("백엔드에서 가져온 notice 한개", res.data);
  return res.data;
};
export const formatter = (i) => {
  return format(parseISO(i.createdAt), "yyyy-MM-dd");
};
