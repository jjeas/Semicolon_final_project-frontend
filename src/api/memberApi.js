import axios from "axios";

export const getOne = async (id) => {
  const res = await axios.get(
    `http://localhost:8080/api/member/memberEdit/${id}`
  );
  return res.data;
};
