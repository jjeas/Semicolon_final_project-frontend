import axios from "axios";
const API_SERVER_HOST = "http://www.jaeseok.store";
const host = `${API_SERVER_HOST}/api/availableTimes`;

export const getAvailableTime = async (spaceId, date) => {
  var str = `${host}`;
  const res = await axios.get(str, {
    params: {
      spaceId: spaceId,
      date: date,
    },
  });
  console.log("backend로부터 온데이터 ", res.data);
  return res.data;
};

export const getAvailableSpace = async (id, data) => {
  const res = await axios.post(
    `http://www.jaeseok.store/api/availableSpace/${id}`,
    data
  );
  console.log("backend로부터 온데이터 ", res.data);
  return res.data;
};

export const getTime = async (request) => {
  const res = await axios.post(`http://www.jaeseok.store/api/getTime`, request);
  console.log("backend로부터 온데이터 ", res.data);
  return res.data;
};
