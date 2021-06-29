import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import baseURL from '@/api/config.js'
const service = axios.create({
  baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});
// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    let uid = store.getters.userInfo && store.getters.userInfo.user_id;
    config.headers = {
      uid: uid,
    };
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
