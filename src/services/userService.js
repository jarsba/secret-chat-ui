import axios from "axios";
import jwt from 'jwt-decode'
import { cloneElement } from "react";

const BASE_URL = process.env.REACT_APP_SC_BASE_URL;

const login = async (username, password) => {
  try {
    let response = await axios.post(`${BASE_URL}/login`, {
      username: username,
      password: password,
    });
    let data = response.data
    const user = jwt(data.access_token);
    return {'access_token': data.access_token, 'user_id': user.identity};
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id) => {
  let token = localStorage.getItem("token");

  try {
    let response = await axios.get(`${BASE_URL}/user/${id}`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export { login, getUsers, getUser };
