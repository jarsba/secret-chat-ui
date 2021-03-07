import axios from "axios";

const BASE_URL = process.env.REACT_APP_SC_BASE_URL;

const login = async (username, password) => {
  try {
    let response = await axios.post(`${BASE_URL}/login`, {
      username: username,
      password: password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.get(`${BASE_URL}/user`, {
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

export { login, getUsers };
