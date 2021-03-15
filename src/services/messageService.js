import axios from "axios";

const BASE_URL = process.env.REACT_APP_SC_BASE_URL;

const getMessagesFromRoom = async (id) => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.get(`${BASE_URL}/message/chatroom/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMessagesFromUser = async (id) => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.get(`${BASE_URL}/message/user/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postMessage = async (message) => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.post(`${BASE_URL}/message`, message, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const removeMessage = async (id) => {
  let token = localStorage.getItem("token");
  console.log('Remove message with id ', id);

  try {
    let response = await axios.delete(`${BASE_URL}/message/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getMessagesFromRoom, getMessagesFromUser, postMessage, removeMessage };
