import axios from "axios"
import { token } from "../utils/token";

export const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(token && config.headers) {
    config.headers.Authorizarion = `Berear ${token}`
  } 
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
