import api from '../utils/axios'

const getRooms = async () => {
  try {
    let response = await api.get(`/chatroom`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getRoom = async (id) => {

  try {
    let response = await api.get(`/chatroom/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export { getRooms, getRoom };
