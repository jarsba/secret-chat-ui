import axios from "axios";
import {history} from '../index'

const BASE_URL = process.env.REACT_APP_SC_BASE_URL;

const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(function(request) {
  let token = localStorage.getItem("token");
  request.headers = {
    Authorization: `JWT ${token}`,
  }
  return request;
}, function(error) {
  return Promise.reject(error)
});

api.interceptors.response.use(function(response){
  return response;
}, function(error) {
  const {status, data, config} = error.response
  if (status === 401) {
    localStorage.removeItem("token")
    history.push("/login")
  }
});

export default api;
