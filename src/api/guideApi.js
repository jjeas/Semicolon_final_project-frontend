import axios from "axios";

export const upload = async (formData) => {
  const res = await axios.post(
    `http://api.jeocenter.store/api/guide/upload`,
    formData
  );
  return res.data;
};

export const getCategory = async (category) => {
  const res = await axios.get(
    `http://api.jeocenter.store/api/guide/${category}`
  );
  return res.data;
};

export const getView = async (fileName) => {
  const res = await axios.get(
    `http://api.jeocenter.store/api/view/${fileName}"`
  );
  return res.data;
};
