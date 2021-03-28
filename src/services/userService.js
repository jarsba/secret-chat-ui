import axios from "axios";
import jwt from 'jwt-decode'
import api from '../utils/axios'

const login = async (username, password) => {
  try {
    let response = await api.post(`/login`, {
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

  try {
    let response = await api.get(`/user`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (id) => {

  try {
    let response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.log('Failure');
    console.log(error);
  }
};


export { login, getUsers, getUser };
