import api from '../utils/axios'


const getMessagesFromRoom = async (id) => {
  try {
    let response = await api.get(`/message/chatroom/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMessagesFromUser = async (id) => {
  try {
    let response = await api.get(`/message/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postMessage = async (message) => {
  try {
    let response = await api.post(`/message`, message);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const removeMessage = async (id) => {
  console.log('Remove message with id ', id);
  try {
    let response = await api.delete(`/message/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getMessagesFromRoom, getMessagesFromUser, postMessage, removeMessage };
