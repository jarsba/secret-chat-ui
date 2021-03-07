import axios from "axios";

const BASE_URL = process.env.REACT_APP_SC_BASE_URL;

const getRooms = async () => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.get(`${BASE_URL}/chatroom`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    console.log(response);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getRooms };
